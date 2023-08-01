package com.ssafy.unibirth.search.dto;

import com.ssafy.unibirth.constellation.dto.ConstellationItemDto;
import com.ssafy.unibirth.member.dto.MemberItemDto;
import com.ssafy.unibirth.star.dto.StarItemDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class SearchResDto {
    private List<ConstellationItemDto> constellationList;
    private List<StarItemDto> starList;
    private List<MemberItemDto> memberList;

    public SearchResDto() {
        this.constellationList = new ArrayList<>();
        this.starList = new ArrayList<>();
        this.memberList = new ArrayList<>();
    }
}
