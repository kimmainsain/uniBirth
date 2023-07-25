package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.ReadStarListResDto;
import jakarta.persistence.Access;
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
    private int boardSize;
    private int[][] lineList;
    private List<ReadStarListResDto> starList;
}