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
@CrossOrigin(origins = "*")
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

    @GetMapping("/pin/{id}/{memberId}")
    public ResponseEntity addPin(@PathVariable("id") Long constellationId, @PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.addPin(constellationId, memberId));
    }

    @GetMapping("/profiles/{id}")
    public ResponseEntity getParticipatedConstellationList(@PathVariable("id") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readParticipatedList(memberId));
    }

    @GetMapping("/profiles/pins/{id}")
    public ResponseEntity getPinedConstellationList(@PathVariable("id") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readPinedList(memberId));
    }

    @DeleteMapping("/pin/{id}/{memberId}")
    public ResponseEntity removePin(@PathVariable("id") Long constellationId, @PathVariable("memberId") Long memberId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.removePin(constellationId, memberId));
    }
}
