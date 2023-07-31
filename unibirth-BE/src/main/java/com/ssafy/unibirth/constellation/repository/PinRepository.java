package com.ssafy.unibirth.constellation.repository;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.domain.Pin;
import com.ssafy.unibirth.constellation.domain.PinId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PinRepository extends JpaRepository<Pin, PinId> {
    @Query("SELECT p.constellation FROM Pin p WHERE p.member.id = :memberId")
    List<Constellation> findConstellationListByMemberId(@Param("memberId") Long memberId);
}
