package com.ssafy.unibirth.constellation.respository;

import com.ssafy.unibirth.constellation.domain.Constellation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConstellationRepository extends JpaRepository<Constellation, Long> {
}
