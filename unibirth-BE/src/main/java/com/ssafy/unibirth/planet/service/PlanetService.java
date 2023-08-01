package com.ssafy.unibirth.planet.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.dto.PlanetItemDto;
import com.ssafy.unibirth.planet.dto.PlanetListDto;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
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

    public List<PlanetItemDto> convertToPlanetListDto(List<Planet> planetList) {
        return planetList.stream()
                .map(planet -> PlanetItemDto.builder()
                        .planetId(planet.getId())
                        .title(planet.getTitle())
                        .gltfUrl(planet.getGltfUrl())
                        .gltfSize(planet.getGltfSize())
                        .x(planet.getX())
                        .y(planet.getY())
                        .z(planet.getZ())
                        .build()
                ).collect(Collectors.toList());
    }
}
