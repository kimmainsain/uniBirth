package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.exception.MemberNotFoundException;
import com.ssafy.unibirth.member.repository.MemberRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class MemberService {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    MemberRepository memberRepository;


    // 회원 가입
    public void signup(Member member) {
        memberRepository.save(member);
    }

    // 회원 정보 수정
    public void updateUser(Long id, String nickname, String password) {
        String query = "update Member m set m.nickname = :nickname,  m.password = :password where m.id = :id";
        em.createQuery(query, Member.class)
                .setParameter("id", id)
                .setParameter("nickname", nickname)
                .setParameter("password", password)
                .executeUpdate();
    }

    // 회원 상세정보
    public Optional<Member> detailUser(Long id) {
        return memberRepository.findById(id);
    }

    // 회원 탈퇴
    public void deleteUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new MemberNotFoundException("존재하지 않는 회원입니다"));
        member.deleteMember();
    }



}
