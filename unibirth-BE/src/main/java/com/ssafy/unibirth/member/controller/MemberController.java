package com.ssafy.unibirth.member.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.dto.*;
import com.ssafy.unibirth.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberService memberService;

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<Void> signup(@RequestBody Member member) {
        memberService.signup(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto) {
        LoginResponseDto loginUser = memberService.login(loginRequestDto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, loginUser);
    }

    // 회원 정보 조회
    @GetMapping("/detail/{id}")
    public ResponseEntity<MemberDto> detailUser(@PathVariable("id") Long id) {
        Member member = memberService.detailUser(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, new MemberDto(member));
    }

    // 회원정보(닉네임, 비밀번호) 수정
    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateUser(@PathVariable("id") Long id, @RequestBody UpdateMemberDto updateMemberDto) {
        memberService.updateUser(id, updateMemberDto.getNickname(), updateMemberDto.getPassword());
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

    // 프로필 조회
    @GetMapping("/profiles/{id}")
    public ResponseEntity<ProfileRespDto> getProfile(@PathVariable("id") Long id) {
        ProfileRespDto profile = memberService.getProfile(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, profile);
    }

    // 프로필 수정
    @PutMapping("/profiles/{id}")
    public ResponseEntity<Void> updateProfile(@PathVariable("id") Long id, @RequestBody UpdateProfileReqDto updateProfileReqDto) {
        memberService.updateProfile(id, updateProfileReqDto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 결재 후 별자리 칸 추가
    @PutMapping("/board/{id}")
    public  ResponseEntity<Void> addBlocks(@PathVariable("id") Long id) {
        Member member = memberService.detailUser(id);
        memberService.addBlocks(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원이 별자리 생성 격자판을 몇칸까지 쓸 수 있는지 확인
    @GetMapping("/board/{id}")
    public ResponseEntity<Integer> checkBlocks(@PathVariable("id") Long id) {
        Member member = memberService.detailUser(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, member.getPurchasedBoard());
    }

    // 결재 후 핀 가능 별자리 갯수 추가
    @PutMapping("/pin/{id}")
    public ResponseEntity<Void> addPins(@PathVariable("id") Long id) {
        Member member = memberService.detailUser(id);
        memberService.addPins(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원이 몇 개까지 별자리를 핀할 수 있는지 확인
    @GetMapping("/pin/{id}")
    public ResponseEntity<Integer> checkPins(@PathVariable("id") Long id) {
        Member member = memberService.detailUser(id);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, member.getPurchasedPin());
    }

}
