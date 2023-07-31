package com.ssafy.unibirth.planet.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.dto.PlanetPostReqDto;
import com.ssafy.unibirth.planet.service.PlanetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/planets")
@CrossOrigin(origins = "*")
public class PlanetController {

    private final PlanetService planetService;
    private final MemberService memberService;
    @GetMapping("")
    public ResponseEntity getPlanetList(){
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, planetService.getPlanetList());
    }


}
