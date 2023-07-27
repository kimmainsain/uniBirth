package com.ssafy.unibirth.follow.controller;

import com.ssafy.unibirth.follow.dto.FollowReqDto;
import com.ssafy.unibirth.follow.service.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/profiles")
@CrossOrigin(origins = "*")
public class FollowController {

    private final FollowService followService;

    @PostMapping("/follow")
    public ResponseEntity<?> follow(@RequestBody FollowReqDto followReqDto) throws Exception {
        followService.follow(followReqDto);
        return ResponseEntity.ok("success");
    }

}
