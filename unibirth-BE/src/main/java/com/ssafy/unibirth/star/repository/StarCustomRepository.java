package com.ssafy.unibirth.star.repository;



import com.querydsl.core.Tuple;
import com.ssafy.unibirth.star.domain.Star;

import java.util.List;

public interface StarCustomRepository {
    List<Tuple> findTopStarListByPlanetId(Long planetId);
}
