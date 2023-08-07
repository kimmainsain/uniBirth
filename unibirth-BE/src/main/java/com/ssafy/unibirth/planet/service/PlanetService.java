package com.ssafy.unibirth.planet.service;

import com.querydsl.core.Tuple;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.dto.PlanetItemDto;
import com.ssafy.unibirth.planet.dto.PlanetListDto;
import com.ssafy.unibirth.planet.dto.PlanetStarItemDto;
import com.ssafy.unibirth.planet.dto.PlanetStarListResDto;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.repository.StarCustomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class PlanetService {
    private final PlanetRepository planetRepository;
    private final StarCustomRepository starCustomRepository;

    @Transactional(readOnly = true)
    public Planet findPlanetById(Long id) throws NotFoundException {
        return planetRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.PLANET_NOT_FOUND)
        );
    }

    @Transactional(readOnly = true)
    public PlanetListDto getPlanetList(){
        List<Planet> planetList = planetRepository.findAll();
        List<PlanetItemDto> planetListDtoList = convertToPlanetListDto(planetList);
        return new PlanetListDto(planetListDtoList);
    }

    @Transactional(readOnly = true)
    public PlanetStarListResDto getPlanetStarList(Long planetId) {
        List<Tuple> starList = starCustomRepository.findTopStarListByPlanetId(planetId);
        List<PlanetStarItemDto> planetStarItemDtoList = convertToPlanetStarListResDto(starList);
        return new PlanetStarListResDto(planetStarItemDtoList);
    }

    public List<PlanetItemDto> convertToPlanetListDto(List<Planet> planetList) {
        return planetList.stream()
                .map(planet -> PlanetItemDto.builder()
                        .planetId(planet.getId())
                        .build()
                ).collect(Collectors.toList());
    }

    private List<PlanetStarItemDto> convertToPlanetStarListResDto(List<Tuple> starList) {
        return starList.stream()
                .map(star -> PlanetStarItemDto.builder()
                                .starId(star.get(0, Long.class))
                                .brightness(star.get(1, Integer.class))
                                .imageUrl(star.get(2, String.class))
                                .nickname(star.get(3, String.class))
                                .build()
                        )
                .collect(Collectors.toList());
    }
}
