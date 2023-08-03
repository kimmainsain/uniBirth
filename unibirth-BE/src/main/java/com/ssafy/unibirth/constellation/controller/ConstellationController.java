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
    @PostMapping("/register")
    public ResponseEntity createConstellation(@RequestBody ConstellationReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.create(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity getConstellation(@PathVariable("id") Long constellationId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.read(constellationId));
    }

    @GetMapping("/list/{planetId}")
    public ResponseEntity getConstellationList(@PathVariable("planetId") Long planetId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readAll(planetId));
    }

    @GetMapping("/pin/{id}")
    public ResponseEntity addPin(@PathVariable("id") Long constellationId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.addPin(constellationId));
    }

    @GetMapping("/profiles")
    public ResponseEntity getParticipatedConstellationList(@RequestParam("nickname") String nickname) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readParticipatedList(nickname));
    }

    @GetMapping("/profiles/pins")
    public ResponseEntity getPinedConstellationList(@RequestParam("nickname") String nickname) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readPinedList(nickname));
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity getConstellationDetail(@PathVariable("id") Long constellationId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readDetail(constellationId));
    }

    @GetMapping("/templates")
    public ResponseEntity getTemplateList() {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.readTemplateList());
    }

    @DeleteMapping("/pin/{id}")
    public ResponseEntity removePin(@PathVariable("id") Long constellationId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationService.removePin(constellationId));
    }
}
