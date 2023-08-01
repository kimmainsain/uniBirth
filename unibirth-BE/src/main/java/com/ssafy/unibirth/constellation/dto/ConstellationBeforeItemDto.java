package com.ssafy.unibirth.constellation.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ConstellationBeforeItemDto {
    private Long constellationId;
    private String title;
    private int boardSize;
    private String lineList;
    private double x;
    private double y;
}
