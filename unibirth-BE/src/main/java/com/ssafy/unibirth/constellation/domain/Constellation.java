package com.ssafy.unibirth.constellation.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.unibirth.common.domain.util.BaseEntity;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.star.domain.Star;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Constellation extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "constellation_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "planet_id")
    private Planet planet;

    @OneToMany(mappedBy = "constellation")
    @JsonIgnore
    private List<Star> starList = new ArrayList<>();

    private String title;
    private String description;

    @ColumnDefault("10")
    private int boardSize;
    @ColumnDefault("0")
    private int pointCount;
    @ColumnDefault("0")
    private int starCount;
    @ColumnDefault("'[]'")
    private String lineList;
    @ColumnDefault("'[]'")
    private String pointList;
    @ColumnDefault("0")
    private int totalBrightness;
    @ColumnDefault("0")
    private double x;
    @ColumnDefault("0")
    private double y;

    public Constellation(Member member, Planet planet, String title, String description, int boardSize, int pointCount, String lineList, String pointList) {
        this.member = member;
        this.planet = planet;
        this.title = title;
        this.description = description;
        this.boardSize = boardSize;
        this.pointCount = pointCount;
        this.lineList = lineList;
        this.pointList = pointList;
    }
}
