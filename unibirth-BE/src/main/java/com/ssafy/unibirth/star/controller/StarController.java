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
@CrossOrigin(origins = "*")
public class StarController {
    private final StarService starService;

    @PostMapping("/register/{id}")
    public ResponseEntity createStar(@PathVariable("id") Long memberId, @RequestBody CreateStarReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.create(memberId, dto));
    }
}
