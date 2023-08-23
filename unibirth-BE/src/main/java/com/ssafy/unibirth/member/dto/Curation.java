package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.star.domain.Star;
import lombok.AllArgsConstructor;
import lombok.Data;

// 큐레이션된 별
@Data
@AllArgsConstructor
public class Curation {

    private Long starId;
    private String nickname;
    private String imageUrl;
    private String title;
    private String content;
    private Long constellationId;

    public Curation(Star star) {
        this.starId = star.getId();
        this.nickname = star.getMember().getNickname();
        this.imageUrl = star.getImageUrl();
        this.title = star.getTitle();
        this.content = star.getContent();
        this.constellationId = star.getConstellation().getId();
    }
}

