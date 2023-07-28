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

    public ProfileRespDto(Member member) {
        this.nickname = member.getNickname();
        this.birth = member.getBirth();
        this.starCount = member.getStarCount();
        this.followingCount = member.getFollowingCount();
        this.followerCount = member.getFollowerCount();
        this.introduction = member.getIntroduction();
        this.imageUrl = member.getImageUrl();
    }
}
