package com.ssafy.unibirth.follow.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

}
