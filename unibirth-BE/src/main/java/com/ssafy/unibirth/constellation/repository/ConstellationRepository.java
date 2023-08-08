package com.ssafy.unibirth.constellation.repository;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.star.domain.Star;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConstellationRepository extends JpaRepository<Constellation, Long> {
    List<Constellation> findAllByPlanetId(Long planetId);
    List<Constellation> findAllByTitleContains(String title);

    // 내가 만든 별자리 + 내가 별을 1개 이상 작성한 별자리
    @Query(value = "SELECT c.id, c.title, c.boardSize, c.lineList, c.x, c.y, c.imageUrl " +
            "FROM Constellation c " +
            "WHERE c.id IN (SELECT s.constellation.id FROM Star s WHERE s.member.id = :memberId) " +
            "OR c.member.id = :memberId")
    List<Object[]> findparticipatedConstellationList(@Param("memberId") Long memberId);

}
