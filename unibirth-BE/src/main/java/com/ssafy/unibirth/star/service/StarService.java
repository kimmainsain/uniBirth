package com.ssafy.unibirth.star.service;

import com.ssafy.unibirth.common.api.exception.CustomException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.constellation.service.ConstellationService;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.star.domain.Brightness;
import com.ssafy.unibirth.star.domain.BrightnessId;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.dto.CreateStarReqDto;
import com.ssafy.unibirth.star.dto.CreateStarResDto;
import com.ssafy.unibirth.star.dto.ReadStarDto;
import com.ssafy.unibirth.star.repository.BrightnessRepository;
import com.ssafy.unibirth.star.repository.StarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StarService {
    private final StarRepository starRepository;
    private final BrightnessRepository brightnessRepository;
    private final MemberService memberService;
    private final ConstellationService constellationService;

    @Transactional
    public CreateStarResDto create(Long memberId, CreateStarReqDto dto) {
        Long constellationId = dto.getConstellationId();
        checkCompletion(constellationId);

        Member member = memberService.detailUser(memberId);
        Constellation constellation = constellationService.findConstellationById(constellationId);
        Star star = dto.toEntity(constellation, member);
        Long createdId = starRepository.save(star).getId();

        constellationService.increaseConstellationStarCount(constellationId);
        return new CreateStarResDto(createdId);
    }

    public ReadStarDto read(Long id, Long memberId) {
        Star star = findStarById(id);
        BrightnessId brightnessId = new BrightnessId(memberId, id);
        boolean alreadyLiked = brightnessRepository.existsById(brightnessId);
        return ReadStarDto.from(star, memberId, alreadyLiked);
    }

    @Transactional
    public int increaseBrightness(Long id, Long memberId) {
        checkAlreadyLiked(memberId, id);

        Star star = findStarById(id);
        star.setBrightness(star.getBrightness() + 1);
        constellationService.increaseTotalBrightness(star.getConstellation());
        brightnessRepository.save(new Brightness(memberService.detailUser(memberId), star));
        return star.getBrightness();
    }

    public List<Star> getStarListByConstellationId(Long id) {
        return starRepository.findAllByConstellationId(id);
    }

    @Transactional(readOnly = true)
    public Star findStarById(Long id) {
        return starRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.STAR_NOT_FOUND)
        );
    }

    private boolean checkCompletion(Long constellationId) {
        if(constellationService.isCompletion(constellationId)) {
            throw new CustomException(FailCode.ALREADY_COMPLETED_CONSTELLATION);
        }
        return true;
    }

    private boolean checkAlreadyLiked(Long memberId, Long starId) {
        BrightnessId id = new BrightnessId(memberId, starId);
        if(brightnessRepository.existsById(id)) {
            throw new CustomException(FailCode.ALREADY_LIKED_STAR);
        }
        return true;
    }
}