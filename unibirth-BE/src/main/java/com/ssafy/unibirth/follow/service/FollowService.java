package com.ssafy.unibirth.follow.service;

import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.follow.dto.FollowCntDto;
import com.ssafy.unibirth.follow.dto.FollowListDto;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.repository.MemberRepository;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    //팔로우하기
    public void follow(FollowReqDto followReqDto) throws NotFoundException {
        Member followFrom = memberService.detailUser(followReqDto.getFollowFrom());
        Member followTo = memberService.detailUser(followReqDto.getFollowTo());
        FollowId followId = new FollowId(followFrom.getId(), followTo.getId());

        if(followRepository.findById(followId).isPresent()){
            throw new DuplicatedException(FailCode.DUPLICATED_FOLLOW);
        }
        Follow follow = new Follow();
        follow.setId(followId);
        follow.setFollowFrom(followFrom);
        follow.setFollowTo(followTo);
        followRepository.save(follow);

        followFrom.inFollowingCount();
        followTo.inFollowerCount();
        memberRepository.save(followFrom);
        memberRepository.save(followTo);
    }


    public void deleteFollow(String nickname) throws NotFoundException{

        Member followFrom = memberService.getCurrentMember();
        Member followTo = memberService.detailUser(nickname);

        Follow follow = followRepository.findByFollowFromAndAndFollowTo(followFrom, followTo)
                .orElseThrow(() -> new NotFoundException(FailCode.FOLLOWER_NOT_FOUND));

        followRepository.delete(follow);
        followFrom.deFollowingCount();
        followTo.deFollowerCount();
    }

    //팔로워 리스트
    public List<FollowListDto> getFollowerList(String nickname) throws NotFoundException{
        Member followTo = memberService.detailUser(nickname);

        List<Follow> followers;
        List<FollowListDto> followList = new ArrayList<>();
        followers = followRepository.findAllByFollowTo(followTo);
        for (Follow follower : followers) {
            followList.add(FollowListDto.builder()
                .imageUrl(follower.getFollowFrom().getImageUrl())
                .nickname(follower.getFollowFrom().getNickname())
                .build());
        }
        return followList;
    }


    //팔로잉 리스트
    public List<FollowListDto> getFollowingList(String nickname) throws NotFoundException{
        Member followFrom = memberService.detailUser(nickname);

        List<Follow> followings;
        List<FollowListDto> followList = new ArrayList<>();
        followings = followRepository.findAllByFollowFrom(followFrom);
        for (Follow following : followings) {
            followList.add(FollowListDto.builder()
                    .imageUrl(following.getFollowTo().getImageUrl())
                    .nickname(following.getFollowTo().getNickname())
                    .build());
        }

        return followList;
    }

    //팔로워 수
    public FollowCntDto countFollowers(String nickname) throws NotFoundException{
        Member followTo = memberService.detailUser(nickname);

        Long cnt = followRepository.countByFollowTo(followTo);
        return new FollowCntDto(cnt);
    }

    //팔로잉 수
    public FollowCntDto countFollowings(String nickname) throws NotFoundException{
        Member followFrom = memberService.detailUser(nickname);

        Long cnt = followRepository.countByFollowFrom(followFrom);

        return new FollowCntDto(cnt);
    }
}
