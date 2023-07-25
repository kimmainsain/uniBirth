package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.star.domain.Star;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class GetConstellationResDto {
    private Long constellationId;
    private boolean completion;
    private int boardSize;
    private List<List<Integer>> lineList;
    private List<Star> starList;
}