package com.ssafy.unibirth.star.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateStarReqDto {
    private String content;
    private String imageUrl;
}
