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
}
