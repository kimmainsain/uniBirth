package com.ssafy.unibirth.member.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.dto.*;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.security.jwt.JwtTokenProvider;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<Void> signup(@RequestBody RegistRequestDto registRequestDto) {
        memberService.signup(registRequestDto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<LoginTokenResponseDto> login(@RequestBody LoginRequestDto loginRequestDto, HttpServletResponse response) {
        LoginResponseDto member = memberService.login(loginRequestDto);

        String accessToken = jwtTokenProvider.createToken(member.getNickname());
        LoginTokenResponseDto loginTokenResponseDto = new LoginTokenResponseDto(accessToken, member.getNickname(), member.getRole(), member.getPurchasedBoard());
        jwtTokenProvider.setHeaderAccessToken(response, accessToken);

        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, loginTokenResponseDto);
    }

    // 회원 정보 조회
    @GetMapping("/detail/{nickname}")
    public ResponseEntity<ProfileRespDto> detailUser(@PathVariable("nickname") String nickname) {
        ProfileRespDto result = memberService.detailProfile(nickname);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, result);
    }

    // 회원정보(닉네임, 비밀번호) 수정
    @PutMapping("/update")
    public ResponseEntity<Void> updateUser(@RequestBody UpdateMemberDto updateMemberDto) {
        Member member = memberService.getCurrentMember();
        memberService.updateUser(member.getId(), updateMemberDto.getNickname(), updateMemberDto.getPassword());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원탈퇴
    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteUser() {
        Member member = memberService.getCurrentMember();
        memberService.deleteUser(member.getId());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 이메일 중복여부 확인 및 인증코드 전송
    @PostMapping("/check/email")
    public ResponseEntity<String> checkDuplicatedEmail(@RequestBody EmailCheckDto emailCheckDto) throws Exception {
        String code = memberService.checkEmailDuplicationAndValidity(emailCheckDto.getEmail());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, code);
    }

    // 입력된 이메일 인증 코드 확인
    @PostMapping("/check/code")
    public ResponseEntity<String> checkEmailCode(@RequestBody CodeDto codeDto) {
        String message = memberService.checkEmailCode(codeDto.getCode(), codeDto.getEmail());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, message);
    }

    // 닉네임 중복여부 확인
    @PostMapping("/check/nickname")
    public ResponseEntity<Void> checkDuplicatedNickname(@RequestBody NicknameCheckDto nicknameCheckDto) {
        memberService.checkDuplicatedNickname(nicknameCheckDto.getNickname());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 내 프로필 조회
    @GetMapping("/profiles/read")
    public ResponseEntity<ProfileRespDto> getProfile() {
        Member member = memberService.getCurrentMember();
        ProfileRespDto profile = memberService.detailProfile(member.getNickname());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, profile);
    }

    // 프로필 수정
    @PutMapping("/profiles/update")
    public ResponseEntity<Void> updateProfile(@RequestBody UpdateProfileReqDto updateProfileReqDto) {
        Member member = memberService.getCurrentMember();
        memberService.updateProfile(member.getId(), updateProfileReqDto);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 결재 후 별자리 칸 추가
    @PutMapping("/board/add")
    public  ResponseEntity<Void> addBlocks() {
        Member member = memberService.getCurrentMember();
        memberService.addBlocks(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원이 별자리 생성 격자판을 몇칸까지 쓸 수 있는지 확인
    @GetMapping("/board/check")
    public ResponseEntity<Integer> checkBlocks() {
        Member member = memberService.getCurrentMember();
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, member.getPurchasedBoard());
    }

    // 결재 후 핀 가능 별자리 갯수 추가
    @PutMapping("/pin/add")
    public ResponseEntity<Void> addPins() {
        Member member = memberService.getCurrentMember();
        memberService.addPins(member);
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS);
    }

    // 회원이 몇 개까지 별자리를 핀할 수 있는지 확인
    @GetMapping("/pin/check")
    public ResponseEntity<Integer> checkPins() {
        Member member = memberService.getCurrentMember();
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, member.getPurchasedPin());
    }

    // 큐레이션
    @GetMapping("/curation")
    public ResponseEntity<List<Curation>> curate(@RequestBody NicknameCheckDto nicknameCheckDto) {
        List<Curation> result = memberService.curate(nicknameCheckDto.getNickname());
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, result);
    }
}