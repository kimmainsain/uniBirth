package com.ssafy.unibirth.planet.domain;

import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
import com.ssafy.unibirth.constellation.domain.Constellation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Planet extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "planet_id")
    private Long id;

    @OneToMany(mappedBy = "planet")
    private List<Constellation> constellationList = new ArrayList<>();

    private String title;
    private String gltfUrl;
    private String gltfSize;
    private double x;
    private double y;
    private double z;
}
