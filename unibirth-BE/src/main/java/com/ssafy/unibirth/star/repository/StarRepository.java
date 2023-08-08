package com.ssafy.unibirth.star.repository;

import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.star.domain.Star;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StarRepository extends JpaRepository<Star, Long> {
    List<Star> findAllByConstellationId(Long constellationId);
    List<Star> findAllByMemberId(Long MemberId);
    List<Star> findAllByContentContains(String content);
    Optional<Star> findByIdAndMemberId(Long starId, Long memberId);

    @Query("SELECT s FROM Star s JOIN s.member m WHERE m.id = :memberId ORDER BY m.createdAt DESC")
    Star findTopByMemberIdOrderByCreatedAtDesc(@Param("memberId") Long memberId);

    @Query("SELECT count(s) FROM Star s JOIN s.member m WHERE m.id = :memberId")
    Integer countByMember(@Param("memberId") Long memberId);

    // 랜덤으로 뽑은 별자리 중 가장 좋아요를 많이 받은 별
    @Query("SELECT s FROM Star s JOIN s.constellation c WHERE c.id = :constellationId ORDER BY s.brightness DESC")
    List<Star> findTopStarByConstellationOrderByBrightnessDesc(@Param("constellationId") Long constellationId);

    // 랜덤으로 뽑은 별자리 중 가장 좋아요를 많이 받은 별
    @Query("SELECT s FROM Star s JOIN s.constellation c WHERE c.id = :constellationId ORDER BY s.brightness DESC")
    List<Star> findTop2StarByConstellationOrderByBrightnessDesc(@Param("constellationId") Long constellationId);
}
