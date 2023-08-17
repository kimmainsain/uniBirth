package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.api.exception.CodeNotCorrectException;
import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.ExpiredException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.common.redis.util.RedisUtil;
import com.ssafy.unibirth.constellation.domain.Constellation;
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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    private final FollowRepository followRepository;
    private final StarRepository starRepository;
    private final PlanetRepository planetRepository;
    private final MailSendService mailSendService;
    private final PasswordEncoder passwordEncoder;
    private final RedisUtil redisUtil;

    // 회원 가입
    public void signup(RegistReqDto registReqDto) {
        checkDuplicatedNickname(registReqDto.getNickname()); // 닉네임 중복 재확인
        checkDuplicatedEmail(registReqDto.getEmail()); // 이메일 중복 재확인
        String password = passwordEncoder.encode(registReqDto.getPassword());
        Member member = new Member(registReqDto, password);
        memberRepository.save(member);
    }

    // 이메일 중복 확인 및 인증 코드 전송(사용 보류)
    public String checkEmailDuplicationAndValidity(String email) throws Exception {

        // 이메일 중복 확인
        Optional<Member> findMember = memberRepository.findByEmail(email);

        if (findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_EMAIL);
        }

        // 이메일 인증코드 전송(일단 보류)
        String verifyCodeId = mailSendService.sendCertificationMail(email);
        return verifyCodeId;
    }

    // 이메일 인증코드 입력값 확인
    public String checkEmailCode(String code, String email) {
        if (!redisUtil.existsData(email)) {
            // 5분이 지나면 저장돼있던 코드가 사라짐
            // 입력된 email이 redisUtil에 key로 존재하지 않는다면
            // 기간이 만료됐으므로 예외 발생시킴
            throw new ExpiredException(FailCode.EXPIRED_CODE);
        } else {
            // 입력된 email이 redisUtil에 key로 존재하더라도
            // 코드가 잘못입력되면 예외 발생
            if (!redisUtil.getData(email).equals(code)) {
                throw new CodeNotCorrectException(FailCode.CODE_NOT_CORRECT);
            }
        }

        // 아무런 예외가 발생하지 않았다면 성공했다는 메시지 전달
        String message = "인증 성공했습니다!";
        return message;
    }


    // 로그인
    public LoginResDto login(LoginReqDto loginReqDto) {
        Member member = memberRepository.findByEmail(loginReqDto.getEmail()).orElseThrow(() -> new NotFoundException(FailCode.EMAIL_NOT_FOUND));
        PasswordEncoder encoder = passwordEncoder;

        if (!encoder.matches(loginReqDto.getPassword(), member.getPassword())) {
            throw new NotFoundException(FailCode.PASSWORD_NOT_FOUND);
        }

        if (member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return new LoginResDto(member.getNickname(), member.getRole(), member.getPurchasedBoard(), member.getConstellationLimit(), member.getStarCount());
    }

    // 회원 정보 수정
    public void updateUser(Long id, String password) {
        // 본인이 수정하는 것이기 때문에 Optional 객체에 null이 담기지 않음
        Member member = memberRepository.findById(id).get();
        String newPassword = passwordEncoder.encode(password);
        member.updateMember(newPassword);
    }

    // 회원 상세정보
    public Member detailUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if (member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return member;
    }

    public Member detailUser(String nickname) {
        Member member = memberRepository.findByNickname(nickname).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if (member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        return member;
    }
    
    // 내 프로필 정보 반환
    public MyProfileResDto myDetailProfile(String nickname) {
        Member member = memberRepository.findByNickname(nickname).get();
        int starCount = starRepository.countByMember(member.getId());
        MyProfileResDto result = new MyProfileResDto(member, starCount);
        return result;
    }

    // 다른 회원 프로필 정보 반환
    public ProfileResDto detailProfile(String nickname) {
        Member member = memberRepository.findByNickname(nickname).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if (member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }
        
        int starCount = starRepository.countByMember(member.getId());
        
        // 내가 팔로우 한 사람인지 여부 확인
        boolean isFollow = false;

        Follow follow = followRepository.findFirstByFollowFromAndFollowTo_Nickname(getCurrentMember(), nickname);
        if(follow != null) {
            isFollow = true;
        }

        ProfileResDto result = new ProfileResDto(member, starCount, isFollow);
        return result;
    }

    // 회원 탈퇴
    public void deleteUser(Long id) {
        Member member = memberRepository.findById(id).orElseThrow(() -> new NotFoundException(FailCode.MEMBER_NOT_FOUND));

        if (member.getRole() == Role.DELETED) {
            throw new NotFoundException(FailCode.MEMBER_NOT_FOUND);
        }

        member.deleteMember();
    }

    // 이메일로 중복여부 확인
    public void checkDuplicatedEmail(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);

        if (findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_EMAIL);
        }
    }

    // 닉네임 중복여부 확인
    public void checkDuplicatedNickname(String nickname) {
        Optional<Member> findMember = memberRepository.findByNickname(nickname);

        if (findMember.isPresent()) {
            throw new DuplicatedException(FailCode.DUPLICATED_NICKNAME);
        }
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
        List<Star> uniqueList = new ArrayList<>();
        List<Curation> result = new ArrayList<>();
        Member me = getCurrentMember();
        List<Follow> followingList = new ArrayList<>();
        followingList = followRepository.findAllByFollowFrom(detailUser(me.getNickname()));

        List<Star> allStars = starRepository.findAllExceptMemberId(me.getId());
        if(allStars.size() == 0) {
            throw new NotFoundException(FailCode.CURATION_NOT_FOUND);
        }
        if(allStars.size() <= 2) {
            return allStars.stream().map((star) -> new Curation(star)).collect(Collectors.toList());
        }
        while (uniqueList.size() != 2) {

            if (!followingList.isEmpty()) {
                getRandomFollower(tempList, me, followingList);
            } // if절 끝
            else {
                getRandomPlanetConstellation(tempList, me);
            }

            if (tempList.isEmpty() || tempList.size() < 2){
                getRandomStar(tempList);
            }
            uniqueList = tempList.stream().
                    filter(star -> star.getMember().getId() != getCurrentMember().getId())
                    .distinct()
                    .collect(Collectors.toList());
        }

        return uniqueList.stream().map((star) -> new Curation(star)).collect(Collectors.toList());
    }

    private void getRandomStar(List<Star> tempList) {
        List<Star> allStars = starRepository.findAll();
        Collections.shuffle(allStars, new Random());

        if(tempList.isEmpty()) {
            for (int i = 0; i < 2 ; i++) {
                tempList.add(allStars.get(i));
            }
        }
        else if(tempList.size() < 2) {
            for (int i = 0; i < (2 - tempList.size()); i++) {
                tempList.add(allStars.get(i));
            }
        }
    }

    private void getRandomPlanetConstellation(List<Star> tempList, Member me) {
        Long planetId = me.getPlanetId();
        Planet planet = planetRepository.findById(planetId).get();

        // 2-2. 해당 행성의 별자리 중 랜덤으로 2개를 선정
        // 그 중 가장 좋아요(brigntness)를 많이 받은 별(Star) 1개를 선정
        List<Constellation> constellationList = planet.getConstellationList();
        // 행성에
        if (constellationList != null && constellationList.size() > 0) {
            Collections.shuffle(constellationList, new Random());

            List<Star> topStar = starRepository.findTopStarByConstellationOrderByBrightnessDesc(constellationList.get(0).getId());

            if (!topStar.isEmpty()) {
                Collections.shuffle(topStar, new Random());
                tempList.add(topStar.get(0));
            }
        }
    }

    private void getRandomFollower(List<Star> tempList, Member me, List<Follow> followingList) {
        List<Member> followedList = new ArrayList<>(); // 내가 팔로잉한 유저들
        followingList.forEach((follow) -> {
            followedList.add(follow.getFollowTo());
        });
        Collections.shuffle(followedList, new Random());
        // 그 멤버가 가장 최근에 올린 게시글을 가져옴
        List<Star> latestStar = starRepository.findTopByMemberIdOrderByCreatedAtDesc(followedList.get(0).getId());
        if (!latestStar.isEmpty()) {
            Collections.shuffle(latestStar, new Random());
            tempList.add(latestStar.get(0));
        }
        Long planetId = me.getPlanetId();
        Planet planet = planetRepository.findById(planetId).get();

        List<Constellation> constellationList = planet.getConstellationList();
        if (!constellationList.isEmpty()) {
            Collections.shuffle(constellationList, new Random());
            List<Star> topStar = starRepository.findTopStarByConstellationOrderByBrightnessDesc(constellationList.get(0).getId());
            if (!topStar.isEmpty()) {
                Collections.shuffle(topStar, new Random());
                tempList.add(topStar.get(0));
            }
        }
    }

}
