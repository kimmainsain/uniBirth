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
@CrossOrigin(origins = "*")
public class FollowController {

    private final FollowService followService;

    //팔로우하기
    @PostMapping("/follow")
    public ResponseEntity follow(@RequestBody FollowReqDto followReqDto){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.follow(followReqDto));
    }


    //팔로우 관계 삭제
    @DeleteMapping("/follow")
    public ResponseEntity<Void> deleteFollow(@RequestParam("to") String nickname){
        followService.deleteFollow(nickname);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    //팔로워 목록
    @GetMapping("/followers")
    public ResponseEntity<List> getFollowerList(@RequestParam("nickname") String nickname){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.getFollowerList(nickname));
    }

    //팔로잉 목록
    @GetMapping("/followings")
    public ResponseEntity<List> getFollowingList(@RequestParam("nickname") String nickname){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.getFollowingList(nickname));
    }

    //팔로워 수
    @GetMapping("/followers/cnt")
    public ResponseEntity countFollowers(@RequestParam("nickname") String nickname){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.countFollowers(nickname));
    }

    //팔로잉 수
    @GetMapping("/followings/cnt")
    public ResponseEntity countFollowings(@RequestParam("nickname") String nickname){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, followService.countFollowings(nickname));
    }
}
