package com.ssafy.unibirth.star.service;

import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.ReadStarListResDto;
import com.ssafy.unibirth.star.repository.StarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StarService {
    private final StarRepository starRepository;
    private final MemberService memberService;

    public List<Star> getStarListByConstellationId(Long id) {
        return starRepository.findAllByConstellationId(id);
    }


    public List<ReadStarListResDto> convertToStarListDto(List<Star> starList) {
        return starList.stream()
                .map(star -> ReadStarListResDto.builder()
                        .starId(star.getId())
                        .createdAt(star.getCreatedAt())
                        .content(star.getContent())
                        .brightness(star.getBrightness())
                        .memberId(star.getMember().getId())
                        .nickname(star.getMember().getNickname())
                        .imageUrl(star.getImageUrl())
                        .build())
                .collect(Collectors.toList());
    }
}