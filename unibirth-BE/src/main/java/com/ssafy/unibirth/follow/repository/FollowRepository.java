package com.ssafy.unibirth.follow.repository;

import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.domain.FollowId;
import com.ssafy.unibirth.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FollowRepository extends JpaRepository<Follow, FollowId> {

    //관계 삭제 위한 행 찾기
    Optional<Follow> findByFollowFromAndAndFollowTo(Member followFrom, Member followTo);

    //팔로잉 수
    Long countByFollowFrom(Member followFrom);

    //팔로워 수
    Long countByFollowTo(Member followTo);

    List<Follow> findAllByFollowTo(Member followTo);

    List<Follow> findAllByFollowFrom(Member followFrom);
}