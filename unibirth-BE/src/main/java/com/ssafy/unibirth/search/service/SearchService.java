package com.ssafy.unibirth.search.service;

import com.ssafy.unibirth.constellation.service.ConstellationService;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.search.domain.Category;
import com.ssafy.unibirth.search.dto.SearchResDto;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchService {
    private final ConstellationService constellationService;
    private final StarService starService;
    private final MemberService memberService;

    public SearchResDto search(String condition, String word) {
        final Category category = Category.valueOf(condition.toUpperCase());
        SearchResDto resDto = new SearchResDto();

        switch (category) {
            case CONSTELLATION -> {
                resDto.setConstellationList(constellationService.searchByTitle(word));
            }
            case STAR -> {
                resDto.setStarList(starService.searchByContent(word));
            }
            case NICKNAME -> {
                resDto.setMemberList(memberService.searchByNickname(word));
            }
            default -> {
                resDto.setConstellationList(constellationService.searchByTitle(word));
                resDto.setStarList(starService.searchByContent(word));
                resDto.setMemberList(memberService.searchByNickname(word));
            }
        }

        return resDto;
    }
}
