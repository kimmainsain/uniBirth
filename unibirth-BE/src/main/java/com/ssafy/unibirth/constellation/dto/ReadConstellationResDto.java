package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.star.dto.StarItemDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadConstellationResDto {
    private Long constellationId;
    private boolean completion;
    private boolean alreadyPined;
    private int boardSize;
    private int[][] lineList;
    private int[][] pointList;
    private List<StarItemDto> starList;
}