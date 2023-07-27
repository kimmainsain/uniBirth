package com.ssafy.unibirth.star.service;

import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.service.ConstellationService;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.CreateStarReqDto;
import com.ssafy.unibirth.star.dto.CreateStarResDto;
import com.ssafy.unibirth.star.dto.ReadStarListResDto;
import com.ssafy.unibirth.star.repository.StarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StarService {
    private final StarRepository starRepository;
    private final MemberService memberService;
    private final ConstellationService constellationService;

    public CreateStarResDto create(Long memberId, CreateStarReqDto dto) {
        Member member = memberService.detailUser(memberId);
        Constellation constellation = constellationService.findConstellationById(dto.getConstellationId());
        Star star = dto.toEntity(constellation, member);
        Long createdId = starRepository.save(star).getId();
        return new CreateStarResDto(createdId);
    }

    public List<Star> getStarListByConstellationId(Long id) {
        return starRepository.findAllByConstellationId(id);
    }


}