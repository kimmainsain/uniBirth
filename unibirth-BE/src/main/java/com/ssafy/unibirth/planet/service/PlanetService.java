package com.ssafy.unibirth.planet.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.dto.PlanetListDto;
import com.ssafy.unibirth.planet.dto.PlanetPostReqDto;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PlanetService {
    private final PlanetRepository planetRepository;
    private final MemberService memberService;
    public Planet findPlanetById(Long id) throws NotFoundException {
        return planetRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.PLANET_NOT_FOUND)
        );
    }

    public List<PlanetListDto> getPlanetList(){
        List<Planet> planets;
        List<PlanetListDto> planetList = new ArrayList<>();

        planets = planetRepository.findAll();
        for(Planet planet : planets){
            planetList.add(PlanetListDto.builder()
                    .planet_id(planet.getId())
                    .title(planet.getTitle())
                    .gltf_url(planet.getGltfUrl())
                    .gltf_size(planet.getGltfSize())
                    .x(planet.getX())
                    .y(planet.getY())
                    .z(planet.getZ())
                    .build());
        }

        return planetList;
    }


}
