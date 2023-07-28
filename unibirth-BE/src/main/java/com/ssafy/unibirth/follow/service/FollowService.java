package com.ssafy.unibirth.follow.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.follow.dto.FollowListDto;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.dto.FollowResDto;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
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
        Member follow_from = memberService.detailUser(followReqDto.getFollow_from());
        Member follow_to = memberService.detailUser(followReqDto.getFollow_to());

        FollowId followId = new FollowId(followReqDto.getFollow_from(), followReqDto.getFollow_to());
        Follow follow = new Follow();

        follow.setId(followId);
        follow.setFollowFrom(follow_from);
        follow.setFollowTo(follow_to);
        Long id = followRepository.save(follow).getFollowFrom().getId();
        Long id2 = followRepository.save(follow).getFollowTo().getId();
        return new FollowResDto(id, id2);
    }


    public void deleteFollow(Long id1, Long id2) throws NotFoundException{
        Member follow_from = memberService.detailUser(id1);
        Member follow_to = memberService.detailUser(id2);

        Follow follow = followRepository.findByFollowFromAndAndFollowTo(follow_from, follow_to)
                .orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        followRepository.delete(follow);
    }

    //팔로워 리스트
    public List<FollowListDto> getFollowerList(Long id) throws NotFoundException{
        Member follow_to = memberService.detailUser(id);

        List<Follow> followers;
        List<FollowListDto> followList = new ArrayList<>();
        followers = followRepository.findAllByFollowTo(follow_to);
        for (Follow follower : followers) {
            followList.add(FollowListDto.builder()
                .follow_id(follower.getFollowFrom().getId())
                .image_url(follower.getFollowFrom().getImageUrl())
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
                    .follow_id(following.getFollowTo().getId())
                    .image_url(following.getFollowTo().getImageUrl())
                    .nickname(following.getFollowTo().getNickname())
                    .build());
        }

        return followList;
    }

    //팔로워 수
    public Long countFollowers(Long id) throws NotFoundException{
        Member follow_to = memberService.detailUser(id);

        Long cnt = followRepository.countByFollowTo(follow_to);

        return cnt;
    }

    //팔로잉 수
    public Long countFollowings(Long id) throws NotFoundException{
        Member follow_from = memberService.detailUser(id);

        Long cnt = followRepository.countByFollowFrom(follow_from);

        return cnt;
    }
}
