package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadConstellationDetailResDto {
    private Long constellationId;
    private String constellationTitle;
    private String description;
    private String imageUrl;
    private String color;
    private int totalBrightness;
    private int pointCount;
    private int starCount;
    private LocalDateTime createdAt;
    private boolean isPined;

    public ReadConstellationDetailResDto(Constellation constellation, boolean isPined) {
        this.constellationId = constellation.getId();
        this.constellationTitle = constellation.getTitle();
        this.introduction = constellation.getDescription();
        this.imageUrl = constellation.getImageUrl();
        this.color = constellation.getColor();
        this.totalBrightness = constellation.getTotalBrightness();
        this.pointCount = constellation.getPointCount();
        this.starCount = constellation.getStarCount();
        this.createdAt = constellation.getCreatedAt();
        this.isPined = isPined;
    }
}

