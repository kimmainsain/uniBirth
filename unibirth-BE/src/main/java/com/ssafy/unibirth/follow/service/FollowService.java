package com.ssafy.unibirth.follow.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.follow.dto.FollowCntDto;
import com.ssafy.unibirth.follow.dto.FollowListDto;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.dto.FollowResDto;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.repository.MemberRepository;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;
    private final MemberService memberService;
    //팔로우하기
    public FollowResDto follow(FollowReqDto followReqDto) throws NotFoundException {
        Long id, id2;
        try{
            Member follow_from = memberService.detailUser(followReqDto.getFollowFrom());
            Member follow_to = memberService.detailUser(followReqDto.getFollowTo());

            FollowId followId = new FollowId(followReqDto.getFollowFrom(), followReqDto.getFollowTo());
            Follow follow = new Follow();

            follow.setId(followId);
            follow.setFollowFrom(follow_from);
            follow.setFollowTo(follow_to);
            followRepository.save(follow);
            id = follow.getFollowFrom().getId();
            id2 = follow.getFollowTo().getId();

            follow_from.inFollowingCount();
            follow_to.inFollowerCount();
        }catch (Exception e) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }
        return new FollowResDto(id, id2);
    }


    public void deleteFollow(Long id1, Long id2) throws NotFoundException{
        Member follow_from = memberService.detailUser(id1);
        Member follow_to = memberService.detailUser(id2);

        Follow follow = followRepository.findByFollowFromAndAndFollowTo(follow_from, follow_to)
                .orElseThrow(() -> new NotFoundException(FailCode.FOLLOWER_NOT_FOUND));

        followRepository.delete(follow);
        follow_from.deFollowingCount();
        follow_to.deFollowerCount();
    }

    //팔로워 리스트
    public List<FollowListDto> getFollowerList(Long id) throws NotFoundException{
        Member follow_to = memberService.detailUser(id);

        List<Follow> followers;
        List<FollowListDto> followList = new ArrayList<>();
        followers = followRepository.findAllByFollowTo(follow_to);
        for (Follow follower : followers) {
            followList.add(FollowListDto.builder()
                .imageUrl(follower.getFollowFrom().getImageUrl())
                .nickname(follower.getFollowFrom().getNickname())
                .build());
        }

        return followList;
    }


    //팔로잉 리스트
    public List<FollowListDto> getFollowingList(Long id) throws NotFoundException{
        Member follow_from = memberService.detailUser(id);

        List<Follow> followings;
        List<FollowListDto> followList = new ArrayList<>();
        followings = followRepository.findAllByFollowFrom(follow_from);
        for (Follow following : followings) {
            followList.add(FollowListDto.builder()
                    .imageUrl(following.getFollowTo().getImageUrl())
                    .nickname(following.getFollowTo().getNickname())
                    .build());
        }

        return followList;
    }

    //팔로워 수
    public FollowCntDto countFollowers(Long id) throws NotFoundException{
        Member follow_to = memberService.detailUser(id);

        Long cnt = followRepository.countByFollowTo(follow_to);
        return new FollowCntDto(cnt);
    }

    //팔로잉 수
    public FollowCntDto countFollowings(Long id) throws NotFoundException{
        Member follow_from = memberService.detailUser(id);

        Long cnt = followRepository.countByFollowFrom(follow_from);

        return new FollowCntDto(cnt);
    }
}
