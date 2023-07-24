package com.ssafy.unibirth.constellation.dto;

import lombok.Data;

import java.util.List;

@Data
public class ConstellationResDto {
    private Long constellationId;
    private int boardSize;
    private List<List<Integer>> lineList;
}