package com.ssafy.unibirth.star.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.star.dto.CreateStarReqDto;
import com.ssafy.unibirth.star.dto.UpdateStarReqDto;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/stars")
@CrossOrigin(origins = "*")
public class StarController {
    private final StarService starService;

    @PostMapping("/register")
    public ResponseEntity createStar(@RequestBody CreateStarReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.create(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity getStar(@PathVariable("id") Long starId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.read(starId));
    }

    @GetMapping("/brightness/{id}")
    public ResponseEntity increaseBrightness(@PathVariable("id") Long starId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.updateBrightness(starId, 1));
    }

    @GetMapping("")
    public ResponseEntity getMyStarList(@RequestParam("nickname") String nickname) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.readMyStarList(nickname));
    }

    @PutMapping("/{id}")
    public ResponseEntity update(@RequestBody UpdateStarReqDto dto, @PathVariable("id") Long starId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.update(dto, starId));
    }

    @DeleteMapping("/brightness/{id}")
    public ResponseEntity decreaseBrightness(@PathVariable("id") Long starId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.updateBrightness(starId, -1));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteStar(@PathVariable("id") Long starId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, starService.delete(starId));
    }
}
