package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.domain.Role;
import com.ssafy.unibirth.member.dto.*;
import com.ssafy.unibirth.member.repository.MemberRepository;
import com.ssafy.unibirth.security.SecurityUtil;
import com.ssafy.unibirth.star.domain.Star;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService{

    private final MemberRepository memberRepository;
    private final FollowRepository followRepository;
    private final PasswordEncoder passwordEncoder;

    // 회원 가입
    public void signup(RegistRequestDto registRequestDto) {
        checkDuplicatedNickname(registRequestDto.getNickname()); // 닉네임 중복 재확인
        checkDuplicatedEmail(registRequestDto.getEmail()); // 이메일 중복 재확인
        String password = passwordEncoder.encode(registRequestDto.getPassword());
        Member member = Member.builder()
                                .nickname(registRequestDto.getNickname())
                                .email(registRequestDto.getEmail())
                                .introduction(registRequestDto.getIntroduction())
                                .interest(registRequestDto.getInterest())
                                .password(password)
                                .birth(registRequestDto.getBirth())
                                .imageUrl(registRequestDto.getImageUrl())
                                .build();

        memberRepository.save(member);
    }

    // 로그인
    public LoginResponseDto login(LoginRequestDto loginRequestDto) {
        Member member = memberRepository.findByEmail(loginRequestDto.getEmail()).orElseThrow(() -> new NotFoundException(FailCode.EMAIL_NOT_FOUND));
        PasswordEncoder encoder = passwordEncoder;

        if(!encoder.matches(loginRequestDto.getPassword(), member.getPassword())) {
            throw new NotFoundException(FailCode.PASSWORD_NOT_FOUND);
        }

        if(member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return new LoginResponseDto(member.getNickname(), member.getRole());
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

    public Member getCurrentMember() {
        String nickname = SecurityUtil.getCurrentNickname();
        Member member = memberRepository.findByNickname(nickname).orElseThrow(
                () -> new NotFoundException(FailCode.MEMBER_NOT_FOUND)
        );
        return member;
    }
    // 큐레이션
//    public List<Curation> curate(String nickname) {
//
//        List<Star> tempList = new ArrayList<>();
//
//        // 1. 내가 팔로우한 사람이 가장 최근에 작성한 별(최상단에 위치)
//
//        // 1-1. 내가 팔로잉한 사람들
//        List<Follow> followingList = followRepository.findAllByFollowFrom(detailUser(nickname));
//        // 1-2. 팔로잉한 사람이 있을 때만 그들이 작성한 최신 별 리스트를 갖고옴
//        if(followingList != null && followingList.size() > 0) {
//            List<Member> followedList = new ArrayList<>(); // 내가 팔로잉한 유저들
//            followingList.forEach((follow) -> {
//                followedList.add(follow.getFollowTo());
//            });
//
//        } // if절 끝
//
//        // 2. 본인이 관심있는 행성에서 랜덤으로 별자리 2개 뽑음 -> 그 중 가장 인기가 많은 별 추천(내거 제외)
//
//
//
//        // 큐레이션 결과에 담길 정보
//        // id, writer, imageUrl, content;
//    }

}
