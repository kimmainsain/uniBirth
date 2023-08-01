package com.ssafy.unibirth.planet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanetItemDto {
    private Long planetId;
    private String title;
    private String gltfUrl;
    private Double gltfSize;
    private double x;
    private double y;
    private double z;
}
