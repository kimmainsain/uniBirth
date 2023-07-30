package com.ssafy.unibirth.star.repository;

import com.ssafy.unibirth.star.domain.Brightness;
import com.ssafy.unibirth.star.domain.BrightnessId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BrightnessRepository extends JpaRepository<Brightness, BrightnessId> {
}
