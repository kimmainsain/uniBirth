package com.ssafy.unibirth.star.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateStarResDto {
    private Long starId;
    private String title;
    private int starCount;
    private int constellationLimit;
}
