package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.api.exception.CodeNotCorrectException;
import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.ExpiredException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.common.redis.util.RedisUtil;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.repository.ConstellationRepository;
import com.ssafy.unibirth.follow.domain.Follow;
import com.ssafy.unibirth.follow.repository.FollowRepository;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.domain.Role;
import com.ssafy.unibirth.member.dto.*;
import com.ssafy.unibirth.member.repository.MemberRepository;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
import com.ssafy.unibirth.security.SecurityUtil;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.repository.StarRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private final StarRepository starRepository;
    private final PlanetRepository planetRepository;
    private final MailSendService mailSendService;
    private final ConstellationRepository constellationRepository;
    private final PasswordEncoder passwordEncoder;
    private final RedisUtil redisUtil;

    // 회원 가입
    public void signup(RegistRequestDto registRequestDto) {
        checkDuplicatedNickname(registRequestDto.getNickname()); // 닉네임 중복 재확인
        checkDuplicatedEmail(registRequestDto.getEmail()); // 이메일 중복 재확인
        String password = passwordEncoder.encode(registRequestDto.getPassword());
        Member member = new Member(registRequestDto, password);
        memberRepository.save(member);
    }
    
    // 이메일 중복 확인 및 인증 코드 전송
    public String checkEmailDuplicationAndValidity(String email) throws Exception {
        
        // 이메일 중복 확인
        Optional<Member> findMember = memberRepository.findByEmail(email);

        if(findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_EMAIL);
        }
        
        // 이메일 인증코드 전송
        String verifyCodeId = mailSendService.sendCertificationMail(email);
        return verifyCodeId;
    }

    // 이메일 인증코드 입력값 확인
    public String checkEmailCode(String code, String email) {
        if(!redisUtil.existsData(email)) {
            // 5분이 지나면 저장돼있던 코드가 사라짐
            // 입력된 email이 redisUtil에 key로 존재하지 않는다면
            // 기간이 만료됐으므로 예외 발생시킴
            throw new ExpiredException(FailCode.EXPIRED_CODE);
        } else {
            // 입력된 email이 redisUtil에 key로 존재하더라도
            // 코드가 잘못입력되면 예외 발생
            if(!redisUtil.getData(email).equals(code)) {
                throw new CodeNotCorrectException(FailCode.CODE_NOT_CORRECT);
            }
        }

        // 아무런 예외가 발생하지 않았다면 성공했다는 메시지 전달
        String message = "인증 성공했습니다!";
        return message;
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

        return new LoginResponseDto(member.getNickname(), member.getRole(), member.getPurchasedBoard());
    }

    // 회원 정보 수정
    public void updateUser(Long id, String nickname, String password) {
        // 본인이 수정하는 것이기 때문에 Optional 객체에 null이 담기지 않음
        Member member = memberRepository.findById(id).get();
        String newPassword = passwordEncoder.encode(password);
        member.updateMember(nickname, newPassword);
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

    // 회원 프로필 정보 반환
    public ProfileRespDto detailProfile(String nickname) {
        Member member = memberRepository.findByNickname(nickname).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if(member.getRole() == Role.DELETED){
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        int starCount = starRepository.countByMember(member.getId());
        ProfileRespDto result = new ProfileRespDto(member, starCount);
        return result;
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
//    public ProfileRespDto getProfile(Long id) {
//        Member findMember = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));
//        ProfileRespDto profileRespDto = new ProfileRespDto(findMember);
//        return profileRespDto;
//    }

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

    // 현재 로그인한 멤버의 정보 반환
    public Member getCurrentMember() {
        String nickname = SecurityUtil.getCurrentNickname();
        Member member = memberRepository.findByNickname(nickname).orElseThrow(
                () -> new NotFoundException(FailCode.MEMBER_NOT_FOUND)
        );
        return member;
    }
    // 큐레이션
    public List<Curation> curate() {

        List<Star> tempList = new ArrayList<>();
        Member me = getCurrentMember();

        // 1. 내가 팔로우한 사람이 가장 최근에 작성한 별(최상단에 위치)

        // 1-1. 내가 팔로잉한 사람들
        List<Follow> followingList = followRepository.findAllByFollowFrom(detailUser(me.getNickname()));
        // 1-2. 팔로잉한 사람이 있을 때만 그들이 작성한 최신 별 리스트를 갖고옴
        if(followingList != null && followingList.size() > 0) {
            List<Member> followedList = new ArrayList<>(); // 내가 팔로잉한 유저들
            followingList.forEach((follow) -> {
                followedList.add(follow.getFollowTo());
            });
            for (Member member : followedList) {
                Star latestStar = starRepository.findTopByMemberIdOrderByCreatedAtDesc(member.getId());
                if(latestStar != null) {
                    tempList.add(latestStar);
                }
            }
        } // if절 끝

        // 2. 본인이 관심있는 행성에서 랜덤으로 별자리 2개 뽑음 -> 그 중 가장 인기가 많은 별 추천(내거 제외)
        // 2-1. 관심사가 null이 아니면 해당 관심사를 title로 가진 행성을 찾음
        if(me.getInterest() != null) {
            String title = me.getInterest();
            Planet planet = planetRepository.findByTitle(title);
            
            // 2-2. 해당 행성의 별자리 중 랜덤으로 2개를 선정
            // 그 중 가장 좋아요(brigntness)를 많이 받은 별(Star) 2개를 선정
            List<Constellation> constellationList = planet.getConstellationList();
            Collections.shuffle(constellationList, new Random());
            tempList.addAll(constellationRepository.findTopStarsByConstellationOrderByBrightnessDesc(constellationList.get(0).getId()));
//            tempList.addAll(constellationRepository.findTopStarsByConstellationOrderByBrightnessDesc(constellationList.get(1).getId()));
        }
        
        // temp 리스트에서 중복을 제거
        List<Star> uniqueList = tempList.stream().distinct().collect(Collectors.toList());

        // 큐레이션 결과에 담길 정보
        // starId, writer, imageUrl, content;
        List<Curation> result = uniqueList.stream()
                .filter(star -> star.getMember().getId() != getCurrentMember().getId())
                .map((star) -> new Curation(star))
                .collect(Collectors.toList());

        return result;
    }

}
