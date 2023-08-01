package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Member;
import lombok.Data;


import java.util.Date;


@Data
public class ProfileRespDto {

    private String nickname;
    private Date birth;
    private int starCount; // 작성한 별의 수
    private int followingCount;
    private int followerCount;
    private String introduction;
    private String imageUrl;
    private String zodiac; // 본인 생일에 해당하는 황도 12궁 이름

    public ProfileRespDto(Member member) {
        this.nickname = member.getNickname();
        this.birth = member.getBirth();
        this.starCount = member.getStarCount();
        this.followingCount = member.getFollowingCount();
        this.followerCount = member.getFollowerCount();
        this.introduction = member.getIntroduction();
        this.imageUrl = member.getImageUrl();
        this.zodiac = member.getZodiac();
    }
}
