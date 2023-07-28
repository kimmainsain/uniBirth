package com.ssafy.unibirth.constellation.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.constellation.dto.ConstellationReqDto;
import com.ssafy.unibirth.constellation.service.ConstellationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/constellations")
public class ConstellationController {
    private final ConstellationService constellationService;
    @PostMapping("/register/{id}")
    public ResponseEntity createConstellation(@PathVariable("id") Long memberId, @RequestBody ConstellationReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.create(memberId, dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity getConstellation(@PathVariable("id") Long constellationId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.read(constellationId));
    }

    @GetMapping("/list/{planetId}")
    public ResponseEntity getConstellationList(@PathVariable("planetId") Long planetId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readAll(planetId));
    }
}
