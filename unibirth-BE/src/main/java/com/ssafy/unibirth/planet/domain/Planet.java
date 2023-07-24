package com.ssafy.unibirth.planet.domain;

import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
import com.ssafy.unibirth.constellation.domain.Constellation;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Planet extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "planet_id")
    private Long id;

    private String title;

    @OneToMany(mappedBy = "planet")
    private List<Constellation> constellationList = new ArrayList<>();

    // 아직 UI 작업 중이라 나머지 필드는 보류
}
