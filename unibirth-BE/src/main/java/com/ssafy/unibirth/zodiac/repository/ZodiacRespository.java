package com.ssafy.unibirth.zodiac.repository;

import com.ssafy.unibirth.zodiac.domain.Zodiac;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.Optional;

@Repository
public interface ZodiacRespository extends JpaRepository<Zodiac, Long> {
    Optional<Zodiac> findByStartDateLessThanEqualAndEndDateGreaterThanEqual(Date startDate, Date endDate);
}
