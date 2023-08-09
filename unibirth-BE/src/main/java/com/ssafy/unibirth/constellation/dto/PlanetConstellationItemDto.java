package com.ssafy.unibirth.constellation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanetConstellationItemDto {
    private Long constellationId;
    private String title;
    private int boardSize;
    private int[][] lineList;
    private double x;
    private double y;
    private String imageUrl;
    private boolean alreadyPined;
}
