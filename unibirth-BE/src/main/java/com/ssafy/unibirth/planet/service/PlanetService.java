package com.ssafy.unibirth.planet.service;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class PlanetService {
    private final PlanetRepository planetRepository;

    public Planet findPlanetById(Long id) throws NotFoundException {
        return planetRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.PLANET_NOT_FOUND)
        );
    }
}
