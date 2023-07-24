package com.ssafy.unibirth.member.controller;

import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.dto.MemberDto;
import com.ssafy.unibirth.member.service.MemberService;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    // 회원가입
    @PostMapping("/register")
    public void signup(@RequestBody Member member) {
        memberService.signup(member);
    }

    // 회원정보 확인
    @GetMapping("/detail/{id}")
    public MemberDto detailUser(@PathVariable("id") Long id) {

        Member member = memberService.detailUser(id);
        return new MemberDto(member);
    }

    // 회원정보(닉네임, 비밀번호) 수정
    @PutMapping("/update/{id}")
    public void updateUser(@PathVariable("id") Long id, @RequestBody MemberDto memberDto) {
        memberService.updateUser(id, memberDto.getNickname(), memberDto.getPassword());
    }

    // 회원탈퇴
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        memberService.deleteUser(id);
    }
}
