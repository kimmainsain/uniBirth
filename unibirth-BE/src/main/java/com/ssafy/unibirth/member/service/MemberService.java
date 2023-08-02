package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.domain.Role;
import com.ssafy.unibirth.member.dto.*;
import com.ssafy.unibirth.member.repository.MemberRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    // 회원 가입
    public void signup(RegistRequestDto registRequestDto) {
        checkDuplicatedNickname(registRequestDto.getNickname()); // 닉네임 중복 재확인
        checkDuplicatedEmail(registRequestDto.getEmail()); // 이메일 중복 재확인
        Member member = Member.createMember(registRequestDto, passwordEncoder);
        memberRepository.save(member);
    }

    // 로그인
    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        Member member = memberRepository.findByEmail(loginRequestDto.getEmail()).orElseThrow(() -> new NotFoundException(FailCode.EMAIL_NOT_FOUND));
        PasswordEncoder encoder = passwordEncoder;

        if(!encoder.matches(loginRequestDto.getPassword(), member.getPassword())) {
            throw new NotFoundException(FailCode.PASSWORD_NOT_FOUND);
        }
        return new LoginResponseDto(member.getId(),member.getNickname(), member.getRole());
    }

    // 회원 정보 수정
    public void updateUser(Long id, String nickname, String password) {
        // 본인이 수정하는 것이기 때문에 Optional 객체에 null이 담기지 않음
        Member member = memberRepository.findById(id).get();
        member.updateMember(nickname, password);
    }

    // 회원 상세정보
    public Member detailUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return member;
    }

    public Member detailUser(String nickname) {
        Member member = memberRepository.findByNickname(nickname).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return member;
    }

    // 회원 탈퇴
    public void deleteUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        member.deleteMember();
    }

    // 이메일로 중복여부 확인
    public void checkDuplicatedEmail(String email){
        Optional<Member> findMember = memberRepository.findByEmail(email);

        if(findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_EMAIL);
        }
    }

    // 닉네임 중복여부 확인
    public void checkDuplicatedNickname(String nickname){
        Optional<Member> findMember = memberRepository.findByNickname(nickname);

        if(findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_NICKNAME);
        }
    }

    // 프로필 조회
    public ProfileRespDto getProfile(Long id) {
        Member findMember = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));
        ProfileRespDto profileRespDto = new ProfileRespDto(findMember);
        return profileRespDto;
    }

    // 멤버 프로필 수정
    public void updateProfile(Long id, UpdateProfileReqDto updateProfileReqDto) {
        Member findMember = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));
        findMember.updateProfile(updateProfileReqDto);
    }

    // 결재 후 별자리 칸 추가
    public void addBlocks(Member member) {
        member.plusBlock();
    }

    // 결재 후 핀 가능 별자리 갯수 추가
    public void addPins(Member member) {
        member.plusPin();
    }

    // 검색
    public List<MemberItemDto> searchByNickname(String nickname) {
        List<Member> findMembers = memberRepository.findAllByNicknameContains(nickname);
        List<MemberItemDto> result = findMembers.stream().map(member -> new MemberItemDto(member.getNickname(), member.getImageUrl())).collect(Collectors.toList());
        return result;
    }

}
