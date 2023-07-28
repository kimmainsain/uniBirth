package com.ssafy.unibirth.planet.repository;

import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.dto.PlanetPostReqDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanetRepository extends JpaRepository<Planet, Long> {
    List<Planet> findAll();
}
