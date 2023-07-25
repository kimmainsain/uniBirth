package com.ssafy.unibirth.star.service;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.repository.StarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StarService {
    private final StarRepository starRepository;

    public List<Star> getStarsByConstellationId(Long id) {
        return starRepository.findAllByConstellationId(id);
    }

}
