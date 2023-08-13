package com.ssafy.unibirth.star.dto;

import com.ssafy.unibirth.star.domain.Star;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReadStarDto {
    private Long starId;
    private Long constellationId;
    private Long memberId;
    private String nickname;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int brightness;
    private String title;
    private String content;
    private String imageUrl;
    private boolean isMine; // Json 으로 직렬화시 앞에 is 없이 전송된다.
    private boolean alreadyLiked;

    public static ReadStarDto from(Star star, Long memberId, boolean alreadyLiked) {
        return new ReadStarDto(
                star.getId(),
                star.getConstellation().getId(),
                star.getMember().getId(),
                star.getMember().getNickname(),
                star.getCreatedAt(),
                star.getUpdatedAt(),
                star.getBrightness(),
                star.getTitle(),
                star.getContent(),
                star.getImageUrl(),
                star.getMember().getId() == memberId,
                alreadyLiked
                );
    }
}