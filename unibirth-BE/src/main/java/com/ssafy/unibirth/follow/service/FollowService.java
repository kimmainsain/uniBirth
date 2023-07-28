package com.ssafy.unibirth.follow.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.dto.FollowResDto;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;
    private final MemberService memberService;

    //팔로우하기
    public FollowResDto follow(FollowReqDto followReqDto) throws NotFoundException {
        Member follow_from = memberService.detailUser(followReqDto.getFollow_from());
        Member follow_to = memberService.detailUser(followReqDto.getFollow_to());

        FollowId followId = new FollowId(followReqDto.getFollow_from(), followReqDto.getFollow_to());
        Follow follow = new Follow();

        follow.setId(followId);
        follow.setFollowFrom(follow_from);
        follow.setFollowTo(follow_to);
        Long id = followRepository.save(follow).getFollowTo().getId();
        return new FollowResDto(id);
    }


    public void deleteFollow(Long id1, Long id2) throws NotFoundException{
        Member follow_from = memberService.detailUser(id1);
        Member follow_to = memberService.detailUser(id2);

        Follow follow = followRepository.findByFollowFromAndAndFollowTo(follow_from, follow_to)
                .orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        followRepository.delete(follow);
    }

}
