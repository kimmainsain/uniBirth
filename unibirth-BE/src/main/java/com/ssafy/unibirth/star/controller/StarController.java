package com.ssafy.unibirth.star.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.star.dto.CreateStarReqDto;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/stars")
public class StarController {
    private final StarService starService;

    @PostMapping("/register/{id}")
    public ResponseEntity createStar(@PathVariable("id") Long memberId, @RequestBody CreateStarReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.create(memberId, dto));
    }

    @GetMapping("/{id}/{memberId}")
    public ResponseEntity getStar(@PathVariable("id") Long starId, @PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.read(starId, memberId));
    }

    @GetMapping("/brightness/{id}/{memberId}")
    public ResponseEntity increaseBrightness(@PathVariable("id") Long starId, @PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.updateBrightness(starId, memberId, 1));
    }

    @GetMapping("/{memberId}")
    public ResponseEntity getMyStarList(@PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.getMyStarList(memberId));
    }

    @DeleteMapping("/brightness/{id}/{memberId}")
    public ResponseEntity decreaseBrightness(@PathVariable("id") Long starId, @PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.updateBrightness(starId, memberId, -1));
    }
}
