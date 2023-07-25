package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.dto.ConstellationReqDto;
import com.ssafy.unibirth.constellation.dto.CreateConstellationResDto;
import com.ssafy.unibirth.constellation.dto.GetConstellationResDto;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConstellationService {

    private final ConstellationRepository constellationRepository;
    private final MemberService memberService;
    private final PlanetService planetService;
    private final StarService starService;

    // 별자리 생성
    public CreateConstellationResDto create(Long memberId, ConstellationReqDto dto) {
        // TODO: Planet 객체 조회 및 Member 객체 조회
        Member member = new Member();
        Planet planet = new Planet();
        Constellation constellation = dto.toEntity(member, planet);
        Long createdId = constellationRepository.save(constellation).getId();
        return new CreateConstellationResDto(createdId);
    }

    public static int[][] stringToArray(String arrayString) {
        Gson gson = new Gson();
        return gson.fromJson(arrayString, int[][].class);
        // int[][] list = stringToArray(lineList);
    }

    // 해당 별자리의 별 목록 조회
    public Constellation getConstellationById(Long id) throws NotFoundException {
        return constellationRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.CONSTELLATION_NOT_FOUND)
        );
    }
}
