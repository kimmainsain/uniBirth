package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadConstellationListResDto {
    private List<ConstellationItemDto> constellationList;
}
