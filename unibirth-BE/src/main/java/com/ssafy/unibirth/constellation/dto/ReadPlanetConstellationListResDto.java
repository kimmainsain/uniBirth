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
public class ReadPlanetConstellationListResDto {
    private List<PlanetConstellationItemDto> constellationList;
}
