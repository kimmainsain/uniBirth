package com.ssafy.unibirth.constellation.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TemplateItemDto {
    private Long templateId;
    private String title;
    private String imageUrl;
    private int[][] lineList;
    private int[][] pointList;
    private int pointCount;
    private int boardSize;
}
