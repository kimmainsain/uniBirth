package com.ssafy.unibirth.member.repository;

import com.ssafy.unibirth.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MemberRepository extends JpaRepository<Member, Long> {
}
