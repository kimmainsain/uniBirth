package com.ssafy.unibirth.constellation.controller;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
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
    public ResponseEntity register(@PathVariable("id") Long id, @RequestBody ConstellationReqDto dto) {
        Long constellationId = constellationService.create(id, dto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, constellationId);
    }


}
