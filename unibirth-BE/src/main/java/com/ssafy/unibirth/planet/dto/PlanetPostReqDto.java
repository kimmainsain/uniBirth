package com.ssafy.unibirth.planet.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
public class PlanetPostReqDto {

    private String title;

    private String gltfUrl;

    private Double gltfSize;

    private Double x;

    private Double y;

    private Double z;


}


