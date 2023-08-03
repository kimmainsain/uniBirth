package com.ssafy.unibirth.constellation.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.unibirth.common.domain.util.BaseEntity;
import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.star.domain.Star;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Template extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "template_id")
    private Long id;

    @ColumnDefault("'행성명'")
    private String title;

    @NotNull
    private String imageUrl;

    @ColumnDefault("10")
    private int boardSize;
    @ColumnDefault("0")
    private int pointCount;
    @ColumnDefault("'[]'")
    private String lineList;
    @ColumnDefault("'[]'")
    private String pointList;
}
