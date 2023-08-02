package com.ssafy.unibirth.member.service;


import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.repository.MemberRepository;
import com.ssafy.unibirth.member.vo.MemberVO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberSecurityService implements UserDetailsService{
    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String nickname){
        Member member = memberRepository.findByNickname(nickname).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));
        return new MemberVO(member.getNickname(), member.getPassword(), member.getRole());
    }
}