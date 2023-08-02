package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;


@NoArgsConstructor
@Getter
public class MemberDto {
    // 프론트로 전달해야하는 유저정보에는 무엇이 있을까?
    // 이름, 닉네임, 이메일, 팔로우수, 좋아요수, 소개, 이미지, 생일, 생일에 해당하는 황도 12궁 이름
    private String nickname;
    private String email;
    private int followingCount;
    private int followerCount;
    private int starCount; // 좋아요 수
    private String introduction;
    private String imageUrl;
    private Date birth;
    private String zodiac;

    public MemberDto(Member member) {
        this.nickname = member.getNickname();
        this.email = member.getEmail();
        this.followingCount = member.getFollowingCount();
        this.followerCount = member.getFollowerCount();
        this.starCount = member.getStarCount();
        this.introduction = member.getIntroduction();
        this.imageUrl = member.getImageUrl();
        this.birth = member.getBirth();
        this.zodiac = member.getZodiac();
    }

}
