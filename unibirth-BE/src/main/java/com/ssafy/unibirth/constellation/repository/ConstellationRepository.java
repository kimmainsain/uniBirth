package com.ssafy.unibirth.constellation.repository;

import com.ssafy.unibirth.constellation.domain.Constellation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConstellationRepository extends JpaRepository<Constellation, Long> {
    List<Constellation> findAllByPlanetId(Long planetId);
}
