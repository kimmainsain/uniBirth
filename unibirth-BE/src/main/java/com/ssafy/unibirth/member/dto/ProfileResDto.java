package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Member;
import lombok.Data;

import java.util.Date;


@Data
public class ProfileResDto {

    private String nickname;
    private Date birth;
    private int starCount; // 작성한 별의 수
    private int followingCount;
    private int followerCount;
    private String introduction;
    private String imageUrl;
    private String zodiac; // 본인 생일에 해당하는 황도 12궁 이름
    // 다른 사람의 프로필을 확인할 때는
    // 내가 그 사람을 팔로우했는지 여부도 중요함
    private boolean isFollow;
    private Long planetId; // 관심행성의 아이디

    public ProfileResDto(Member member, int starCount, boolean isFollow) {
        this.nickname = member.getNickname();
        this.birth = member.getBirth();
        this.starCount = starCount; // 작성한 별의 개수
        this.followingCount = member.getFollowingCount();
        this.followerCount = member.getFollowerCount();
        this.introduction = member.getIntroduction();
        this.imageUrl = member.getImageUrl();
        this.zodiac = member.getZodiac();
        this.isFollow = isFollow;
        this.planetId = member.getPlanetId();
    }
}
