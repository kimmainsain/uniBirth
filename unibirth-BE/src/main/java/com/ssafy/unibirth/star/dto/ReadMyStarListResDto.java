package com.ssafy.unibirth.star.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadMyStarListResDto {
    private Long starId;
    private Long constellationId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String title;
    private int brightness;
    private String content;
    private String imageUrl;
}
