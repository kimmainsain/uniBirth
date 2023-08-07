package com.ssafy.unibirth.planet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanetStarListResDto {
    private List<PlanetStarItemDto> starList;
}
