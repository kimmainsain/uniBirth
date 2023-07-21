package com.ssafy.unibirth.member.repository;

import com.ssafy.unibirth.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    // 이메일로 멤버 정보 가져오기
    Optional<Member> findByEmail(String email);
    Optional<Member> findById(Long id);
}
