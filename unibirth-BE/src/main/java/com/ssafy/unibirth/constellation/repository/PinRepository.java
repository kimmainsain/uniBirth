package com.ssafy.unibirth.constellation.repository;

import com.ssafy.unibirth.constellation.domain.Pin;
import com.ssafy.unibirth.constellation.domain.PinId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PinRepository extends JpaRepository<Pin, PinId> {
}
