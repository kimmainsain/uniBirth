package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.planet.domain.Planet;
import com.ssafy.unibirth.planet.repository.PlanetRepository;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@ToString
@Data
@NoArgsConstructor
public class ConstellationReqDto {
    private Long planetId;
    private String title;
    private String description;
    private int boardSize;
    private List<List<Integer>> lineList;
    private List<List<Integer>> pointList;


    public Constellation toEntity(Member member, Planet planet) {
        Constellation constellation = new Constellation();
        constellation.setMember(member);
        constellation.setPlanet(planet);
        constellation.setTitle(title);
        constellation.setDescription(description);
        constellation.setBoardSize(boardSize);
        constellation.setLineList(lineList.toString());
        return constellation;
    }
}