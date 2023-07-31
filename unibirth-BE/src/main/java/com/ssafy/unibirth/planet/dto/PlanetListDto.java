package com.ssafy.unibirth.planet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class PlanetListDto {

    private Long planet_id;

    private String title;

    private String gltf_url;

    private Double gltf_size;

    private Double x;

    private Double y;

    private Double z;
}
