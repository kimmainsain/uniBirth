package com.ssafy.unibirth.constellation.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PinConstellationResDto {
    private Long constellationId;
    private boolean isPin;
}
