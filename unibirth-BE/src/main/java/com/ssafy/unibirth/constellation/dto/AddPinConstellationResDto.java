package com.ssafy.unibirth.constellation.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddPinConstellationResDto {
    private Long constellationId;
    private boolean isPin;
}
