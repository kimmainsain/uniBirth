package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.dto.*;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.ReadStarListResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;
    private final MemberService memberService;
    private final PlanetService planetService;

    public CreateConstellationResDto create(Long memberId, ConstellationReqDto dto) {
        Member member = memberService.detailUser(memberId);
        Planet planet = planetService.findPlanetById(dto.getPlanetId());
        Constellation constellation = dto.toEntity(member, planet);
        Long createdId = constellationRepository.save(constellation).getId();
        return new CreateConstellationResDto(createdId);
    }

    public ReadConstellationResDto read(Long id) {
        Constellation con = findConstellationById(id);
        return ReadConstellationResDto.builder()
                .constellationId(con.getId())
                .completion(con.getPointCount() == con.getStarCount())
                .boardSize(con.getBoardSize())
                .lineList(stringToArray(con.getLineList()))
                .pointList(stringToArray(con.getPointList()))
                .starList(convertToStarListDto(con.getStarList()))
                .build();
    }

    public ReadConstellationListResDto readAll(Long planetId) {
        List<Constellation> constellationList = constellationRepository.findAllByPlanetId(planetId);
        List<ConstellationItemDto> constellationItemDtoList = convertToConstellationItemDto(constellationList);
        return new ReadConstellationListResDto(constellationItemDtoList);
    }

    public Constellation findConstellationById(Long id) throws NotFoundException {
        return constellationRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.CONSTELLATION_NOT_FOUND)
        );
    }

    public boolean isCompletion(Long id) {
        Constellation constellation = findConstellationById(id);
        return constellation.getStarCount() == constellation.getPointCount();
    }

    @Transactional
    public int increaseConstellationStarCount(Long id) {
        Constellation constellation = findConstellationById(id);
        constellation.setStarCount(constellation.getStarCount() + 1);
        return constellation.getStarCount();
    }

    @Transactional
    public int updateTotalBrightness(Constellation constellation, int diff) {
        constellation.setTotalBrightness(constellation.getTotalBrightness() + diff);
        return constellation.getTotalBrightness();
    }

    private int[][] stringToArray(String arrayString) {
        Gson gson = new Gson();
        return gson.fromJson(arrayString, int[][].class);
    }

    private List<ReadStarListResDto> convertToStarListDto(List<Star> starList) {
        return starList.stream()
                .map(star -> ReadStarListResDto.builder()
                        .starId(star.getId())
                        .createdAt(star.getCreatedAt())
                        .content(star.getContent())
                        .brightness(star.getBrightness())
                        .memberId(star.getMember().getId())
                        .nickname(star.getMember().getNickname())
                        .imageUrl(star.getImageUrl())
                        .build())
                .collect(Collectors.toList());
    }

    private List<ConstellationItemDto> convertToConstellationItemDto(List<Constellation> constellationList) {
        return constellationList.stream()
                .map(con ->
                        ConstellationItemDto.builder()
                                .constellationId(con.getId())
                                .title(con.getTitle())
                                .boardSize(con.getBoardSize())
                                .lineList(stringToArray(con.getLineList()))
                                .x(con.getX())
                                .y(con.getY())
                                .build()
                ).collect(Collectors.toList());
    }
}
