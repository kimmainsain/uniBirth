package com.ssafy.unibirth.member.repository;

import com.ssafy.unibirth.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    // 이메일로 멤버 정보 가져오기 => 중복 여부 확인을 위함
    Optional<Member> findByEmail(String email);


    // 닉네임으로 멤버 정보 가져오기 => 중복 여부 확인을 위함
    Optional<Member> findByNickname(String nickname);

    // 검색된 내용이 닉네임에 포함된 유저들 검색
    List<Member> findAllByNicknameContains(String nickname);
}
