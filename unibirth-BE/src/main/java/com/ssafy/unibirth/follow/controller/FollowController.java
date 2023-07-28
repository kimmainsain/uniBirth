package com.ssafy.unibirth.follow.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profiles")
public class FollowController {

    private final FollowService followService;


    //팔로우하기
    @PostMapping("/follow")
    public ResponseEntity follow(@RequestBody FollowReqDto followReqDto){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.follow(followReqDto));
    }


    //팔로우 관계 삭제
    @DeleteMapping({"/follow/from={follow_from}&to={follow_to}"})
    public ResponseEntity<Void> deleteFollow(@PathVariable("follow_from") Long follow_from,
                                             @PathVariable("follow_to") Long follow_to){
        followService.deleteFollow(follow_from, follow_to);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    //팔로워 목록
    @GetMapping("/followers/{follow_to}")
    public ResponseEntity<List> getFollowerList(@PathVariable("follow_to") Long follow_to){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.getFollowerList(follow_to));
    }

    //팔로잉 목록
    @GetMapping("/followings/{follow_from}")
    public ResponseEntity<List> getFollowingList(@PathVariable("follow_from") Long follow_from){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.getFollowingList(follow_from));
    }

    //팔로워 수
    @GetMapping("/followers/cnt/{follow_to}")
    public ResponseEntity countFollowers(@PathVariable("follow_to") Long follow_to){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.countFollowers(follow_to));
    }

    //팔로잉 수
    @GetMapping("/followings/cnt/{follow_from}")
    public ResponseEntity countFollowings(@PathVariable("follow_from") Long follow_from){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.countFollowings(follow_from));
    }
}
