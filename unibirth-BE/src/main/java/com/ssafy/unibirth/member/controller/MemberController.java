package com.ssafy.unibirth.member.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.dto.MemberDto;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<Void> signup(@RequestBody Member member) {
        memberService.signup(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원 정보 조회
    @GetMapping("/detail/{id}")
    public ResponseEntity<MemberDto> detailUser(@PathVariable("id") Long id) {

        Member member = memberService.detailUser(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, new MemberDto(member));
    }

    // 회원정보(닉네임, 비밀번호) 수정
    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable("id") Long id, @RequestBody MemberDto memberDto) {
        memberService.updateUser(id, memberDto.getNickname(), memberDto.getPassword());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원탈퇴
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        memberService.deleteUser(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 이메일 중복여부 확인
    @PostMapping("/check/email")
    public ResponseEntity<Void> checkDuplicatedEmail(String email) {
        memberService.checkDuplicatedEmail(email);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 닉네임 중복여부 확인
    @PostMapping("/check/nickname")
    public ResponseEntity<Void> checkDuplicatedNickname(String nickname) {
        memberService.checkDuplicatedNickname(nickname);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }
}
