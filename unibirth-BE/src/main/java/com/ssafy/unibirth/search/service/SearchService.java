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
        Category category = Category.ALL;
        SearchResDto resDto = new SearchResDto();

        if(isCorrectedCondition(condition)) {
            category = Category.valueOf(condition.toUpperCase());
        }

        switch (category) {
            case CONSTELLATION -> {
                resDto.setConstellationList(constellationService.searchByTitleAndDescriptionContains(word));
            }
            case STAR -> {
                resDto.setStarList(starService.searchByContent(word));
            }
            case NICKNAME -> {
                resDto.setMemberList(memberService.searchByNickname(word));
            }
            default -> {
                resDto.setConstellationList(constellationService.searchByTitleAndDescriptionContains(word));
                resDto.setStarList(starService.searchByContent(word));
                resDto.setMemberList(memberService.searchByNickname(word));
            }
        }

        return resDto;
    }

    private boolean isCorrectedCondition(String condition) {
        try {
            Category.valueOf(condition.toUpperCase());
            return true;
        } catch (IllegalArgumentException exception) {
            return false;
        }
    }
}
