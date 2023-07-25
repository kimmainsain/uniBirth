package com.ssafy.unibirth.constellation.controller;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.dto.ConstellationReqDto;
import com.ssafy.unibirth.constellation.service.ConstellationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/constellation")
@RequiredArgsConstructor
public class ConstellationController {
    private final ConstellationService constellationService;

    @PostMapping("/register/{id}")
    public ResponseEntity createConstellation(@PathVariable("id") Long memberId, @RequestBody ConstellationReqDto dto) {
        Long constellationId = constellationService.create(memberId, dto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationId);
    }

    @GetMapping("/{id}")
    public ResponseEntity getConstellation(@PathVariable("id") Long constellationId) {
        Constellation constellation = constellationService.getConstellationById(constellationId);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellation);
    }

}
