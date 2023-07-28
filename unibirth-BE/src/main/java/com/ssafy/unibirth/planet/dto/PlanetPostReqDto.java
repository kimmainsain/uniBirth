package com.ssafy.unibirth.planet.dto;

import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.planet.domain.Planet;
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

    public Planet toEntity(Long member_id){
        return Planet.builder()
                .title(title)
                .gltfUrl(gltfUrl)
                .gltfSize(gltfSize)
                .x(x)
                .y(y)
                .z(z)
                .member(Member.builder().id(member_id).build())
                .build()
                ;
    }

}


