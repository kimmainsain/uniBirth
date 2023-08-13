package com.ssafy.unibirth.constellation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CreateConstellationResDto {
    private Long constellationId;
    private int constellationLimit;
}
