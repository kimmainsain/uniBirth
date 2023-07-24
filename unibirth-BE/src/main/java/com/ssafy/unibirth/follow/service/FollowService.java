package com.ssafy.unibirth.follow.service;

import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;

    private final MemberRepository memberRepository;

    //팔로우하기
    @Transactional
    public void follow(FollowReqDto followReqDto) throws Exception{

        Member follow_from = memberRepository.findById(followReqDto.getFollow_from())
                .orElseThrow(() -> new NoSuchElementException("No FromMember"));;
        Member follow_to = memberRepository.findById(followReqDto.getFollow_to())
                .orElseThrow(() -> new NoSuchElementException("No ToMember"));;

        FollowId id = new FollowId(followReqDto.getFollow_from(), followReqDto.getFollow_to());

        Follow follow = new Follow();

        follow.setId(id);
        follow.setFollowFrom(follow_from);
        follow.setFollowTo(follow_to);

        followRepository.save(follow);
    }

}
