package com.ssafy.unibirth.planet.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class PlanetDto {
    private String title;
    private String gltfUrl;
    private String gltfSize;
    private double x;
    private double y;
    private double z;
}
