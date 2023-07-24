package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.dto.ConstellationReqDto;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConstellationService {

    private final ConstellationRepository constellationRepository;
    private final MemberService memberService;
    private final PlanetService planetService;

    // 별자리 생성
    public Long create(Long id, ConstellationReqDto dto) {
        // TODO: Planet 객체 조회 및 Member 객체 조회
        Constellation constellation = dto.toEntity(new Member(), new Planet());
        Long createdId = constellationRepository.save(constellation).getId();
        return createdId;
    }

    public static int[][] stringToArray(String arrayString) {
        Gson gson = new Gson();
        return gson.fromJson(arrayString, int[][].class);
        // int[][] list = stringToArray(lineList);
    }

    // TODO: 별자리 조회

}
