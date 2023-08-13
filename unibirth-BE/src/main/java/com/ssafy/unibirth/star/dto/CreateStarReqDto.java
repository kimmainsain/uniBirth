package com.ssafy.unibirth.star.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.star.domain.Star;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Data
@NoArgsConstructor
public class CreateStarReqDto {
    private Long constellationId;
    private String title; // 별 제목
    private String content;
    private String imageUrl;

    public Star toEntity(Constellation constellation, Member member) {
        return new Star(constellation, member, title, content, imageUrl);
    }
}
