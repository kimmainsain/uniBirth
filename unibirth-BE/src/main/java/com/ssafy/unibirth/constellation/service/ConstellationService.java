package com.ssafy.unibirth.constellation.service;

import com.google.gson.Gson;
import com.ssafy.unibirth.common.api.exception.CustomException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.*;
import com.ssafy.unibirth.constellation.dto.*;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.constellation.repository.PinRepository;
import com.ssafy.unibirth.constellation.repository.TemplateRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.service.PlanetService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.StarItemDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
        Long constellationLimit = member.minusConstellationLimit();

        Planet planet = planetService.findPlanetById(dto.getPlanetId());
        List<List<Integer>> pointList = insertZPoint(dto.getPointList());
        List<List<Integer>> lineList = insertZLine(dto.getLineList(), dto.getPointList());
        Constellation constellation = dto.toEntity(member, planet,lineList, pointList);
        Long createdId = constellationRepository.save(constellation).getId();
        return new CreateConstellationResDto(createdId, constellationLimit);
    }

    public ReadConstellationResDto read(Long id) {
        Long memberId = memberService.getCurrentMember().getId();
        Constellation con = findConstellationById(id);
        return ReadConstellationResDto.builder()
                .constellationId(con.getId())
                .completion(con.getPointCount() == con.getStarCount())
                .alreadyPined(isPined(memberId, id))
                .boardSize(con.getBoardSize())
                .lineList(stringToArray(con.getLineList()))
                .pointList(stringToArray(con.getPointList()))
                .starList(convertToStarListDto(con.getStarList()))
                .color(con.getColor())
                .build();
    }

    public ReadPlanetConstellationListResDto readAll(Long planetId) {
        Long memberId = memberService.getCurrentMember().getId();
        List<Constellation> constellationList = constellationRepository.findAllByPlanetId(planetId);
        List<Long> pinedList = pinRepository.findConstellationIdByMemberId(memberId);
        List<PlanetConstellationItemDto> constellationItemDtoList = convertToConstellationItemDto(constellationList, pinedList);
        return new ReadPlanetConstellationListResDto(constellationItemDtoList);
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

    private boolean isPined(Long memberId, Long constellationId) {
        PinId pinId = new PinId(memberId, constellationId);
        return pinRepository.existsById(pinId);
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
                                .z(con.getZ())
                                .imageUrl(con.getImageUrl())
                                .color(con.getColor())
                                .build()
                ).collect(Collectors.toList());
    }

    private List<PlanetConstellationItemDto> convertToConstellationItemDto(List<Constellation> constellationList, List<Long> pinedList) {
        return constellationList.stream()
                .map(con ->
                        PlanetConstellationItemDto.builder()
                                .constellationId(con.getId())
                                .title(con.getTitle())
                                .boardSize(con.getBoardSize())
                                .lineList(stringToArray(con.getLineList()))
                                .x(con.getX())
                                .y(con.getY())
                                .z(con.getZ())
                                .imageUrl(con.getImageUrl())
                                .alreadyPined(pinedList.contains(con.getId()))
                                .color(con.getColor())
                                .pointList(getPointAndBrightness(con.getId()))
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
                                .z((double) con[6])
                                .imageUrl((String) con[7])
                                .color((String) con[8])
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

    private List<Point> getPointAndBrightness(Long id) {
        final int EMPTY = -1;
        int[][] points = stringToArray(constellationRepository.findPointListById(id));
        List<Star> starList = constellationRepository.findStarListById(id);
        List<Point> resultList = new ArrayList<>();

        for(int i = 0; i < points.length; i++) {
            int brightness = i < starList.size() ? starList.get(i).getBrightness() : EMPTY;
            resultList.add(new Point(points[i][0],points[i][1], points[i][2], brightness));
        }
        return resultList;
    }

    private List<List<Integer>> insertZPoint(List<List<Integer>> pointList) {
        for(List<Integer> list : pointList) {
            int z = makeRandom();
            list.add(z);
        }
        return pointList;
    }

    private List<List<Integer>> insertZLine(List<List<Integer>> lineList, List<List<Integer>> pointList) {
        List<List<Integer>> tempLineList = new ArrayList<>();
        for(List<Integer> line : lineList) {
            int left1 = line.get(0), left2 = line.get(1);
            int right1 = line.get(2), right2 = line.get(3);
            tempLineList.add(List.of(
                    left1, left2, getZ(pointList, left1, left2),
                    right1, right2, getZ(pointList, right1, right2))
            );
        }
        return tempLineList;
    }

    private int getZ(List<List<Integer>> pointList, int row, int col) {
        for(List<Integer> point : pointList) {
            if(row == point.get(0) && col == point.get(1)) {
                return point.get(2);
            }
        }
        throw new NotFoundException(FailCode.POINT_NOT_FOUND);
    }

    // make random number x : MIN <= x <= MAX
    private int makeRandom() {
        final int MAX = 5;
        final int MIN = -5;
        return (int) (Math.random() * (MAX-MIN) + 1) + MIN;
    }
}