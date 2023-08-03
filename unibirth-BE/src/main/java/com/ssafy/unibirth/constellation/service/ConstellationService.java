package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.exception.CustomException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.domain.Pin;
import com.ssafy.unibirth.constellation.domain.PinId;
import com.ssafy.unibirth.constellation.domain.Template;
import com.ssafy.unibirth.constellation.dto.*;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.constellation.repository.PinRepository;
import com.ssafy.unibirth.constellation.repository.TemplateRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import com.ssafy.unibirth.security.SecurityUtil;
import com.ssafy.unibirth.security.jwt.JwtTokenProvider;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.StarItemDto;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConstellationService {
    private final ConstellationRepository constellationRepository;
    private final PinRepository pinRepository;
    private final TemplateRepository templateRepository;
    private final MemberService memberService;
    private final PlanetService planetService;

    public CreateConstellationResDto create(ConstellationReqDto dto) {
        Member member = memberService.getCurrentMember();
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

    @Transactional(readOnly = true)
    public ReadConstellationListResDto readParticipatedList(String nickname) {
        Long memberId = memberService.detailUser(nickname).getId();
        List<Object[]> constellationList =  constellationRepository.findparticipatedConstellationList(memberId);
        List<ConstellationItemDto> constellationItemDtoList = convertToConstellationItemDtoByArray(constellationList);
        return new ReadConstellationListResDto(constellationItemDtoList);
    }

    @Transactional(readOnly = true)
    public ReadConstellationListResDto readPinedList(String nickname) {
        Long memberId = memberService.detailUser(nickname).getId();
        List<Constellation> constellationList = pinRepository.findConstellationListByMemberId(memberId);
        List<ConstellationItemDto> constellationItemDtoList = convertToConstellationItemDto(constellationList);
        return new ReadConstellationListResDto(constellationItemDtoList);
    }

    @Transactional(readOnly = true)
    public ReadConstellationDetailResDto readDetail(Long constellationId) {
        Constellation constellation = findConstellationById(constellationId);
        return new ReadConstellationDetailResDto(constellation);
    }

    @Transactional(readOnly = true)
    public ReadTemplateListResDto readTemplateList() {
        List<Template> templateList = templateRepository.findAll();
        List<TemplateItemDto> templateItemDtoList = convertToTemplateItemDto(templateList);
        return new ReadTemplateListResDto(templateItemDtoList);
    }

    public List<ConstellationItemDto> searchByTitle(String word) {
        List<Constellation> constellationList = constellationRepository.findAllByTitleContains(word);
        return convertToConstellationItemDto(constellationList);
    }

    @Transactional(readOnly = true)
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
    public int updateConstellationStarCount(Long id, int diff) {
        Constellation constellation = findConstellationById(id);
        constellation.setStarCount(constellation.getStarCount() + diff);
        return constellation.getStarCount();
    }

    @Transactional
    public int updateTotalBrightness(Constellation constellation, int diff) {
        constellation.setTotalBrightness(constellation.getTotalBrightness() + diff);
        return constellation.getTotalBrightness();
    }

    @Transactional
    public PinConstellationResDto addPin(Long constellationId) {
        Member member = memberService.getCurrentMember();
        checkPinValidation(member.getId(), constellationId);

        Constellation constellation = findConstellationById(constellationId);
        pinRepository.save(new Pin(member, constellation));
        return new PinConstellationResDto(constellationId, true);
    }

    @Transactional
    public PinConstellationResDto removePin(Long constellationId) {
        Long memberId = memberService.getCurrentMember().getId();
        PinId pinId = new PinId(memberId, constellationId);
        Pin pin = pinRepository.findById(pinId).orElseThrow(
                () -> new NotFoundException(FailCode.PIN_NOT_FOUND)
        );
        pinRepository.delete(pin);
        return new PinConstellationResDto(constellationId, false);
    }

    private int[][] stringToArray(String arrayString) {
        Gson gson = new Gson();
        return gson.fromJson(arrayString, int[][].class);
    }

    private boolean checkPinValidation(Long memberId, Long constellationId) {
        PinId pinId = new PinId(memberId, constellationId);
        if(pinRepository.existsById(pinId)) {
            throw new CustomException(FailCode.ALREADY_PINED_CONSTELLATION);
        }
        return true;
    }

    public List<StarItemDto> convertToStarListDto(List<Star> starList) {
        return starList.stream()
                .map(star -> StarItemDto.builder()
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
                                .imageUrl(con.getImageUrl())
                                .build()
                ).collect(Collectors.toList());
    }

    private List<ConstellationItemDto> convertToConstellationItemDtoByArray(List<Object[]> constellationList) {
        return constellationList.stream()
                .map(con ->
                        ConstellationItemDto.builder()
                                .constellationId((Long) con[0])
                                .title((String) con[1])
                                .boardSize((int) con[2])
                                .lineList(stringToArray((String) con[3]))
                                .x((double) con[4])
                                .y((double) con[5])
                                .imageUrl((String) con[6])
                                .build()
                ).collect(Collectors.toList());
    }

    private List<TemplateItemDto> convertToTemplateItemDto(List<Template> templateList) {
        return templateList.stream()
                .map(tem ->
                        TemplateItemDto.builder()
                                .templateId(tem.getId())
                                .title(tem.getTitle())
                                .imageUrl(tem.getImageUrl())
                                .pointCount(tem.getPointCount())
                                .boardSize(tem.getBoardSize())
                                .lineList(stringToArray(tem.getLineList()))
                                .pointList(stringToArray(tem.getPointList()))
                                .build()
                ).collect(Collectors.toList());
    }
}