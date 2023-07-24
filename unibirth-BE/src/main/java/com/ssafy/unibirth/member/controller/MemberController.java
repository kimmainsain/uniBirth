package com.ssafy.unibirth.member.controller;

import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.dto.MemberDto;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberService memberService;

    // 회원가입
    @PostMapping("/signup")
    public void signup(Member member) {
        memberService.signup(member);
    }

    // 회원정보
    @GetMapping("/detail/{id}")
    public MemberDto detailUser(@PathVariable("id") Long id) {
        Optional<Member> member = memberService.detailUser(id);
        if(member.isEmpty()) {
            return null;
        }

        return new MemberDto(member.get());
    }

    // 회원탈퇴
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        memberService.deleteUser(id);
    }
}
