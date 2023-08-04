package com.ssafy.unibirth.planet.repository;

import com.ssafy.unibirth.planet.domain.Planet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanetRepository extends JpaRepository<Planet, Long> {
    List<Planet> findAll();

    Planet findByTitle(String title);


}
