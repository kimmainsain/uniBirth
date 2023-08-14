package com.ssafy.unibirth.star.service;

import com.ssafy.unibirth.comment.domain.Comment;
import com.ssafy.unibirth.comment.dto.ReadCommentItemDto;
import com.ssafy.unibirth.comment.repository.CommentRepository;
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
import com.ssafy.unibirth.star.dto.*;
import com.ssafy.unibirth.star.repository.BrightnessRepository;
import com.ssafy.unibirth.star.repository.StarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class StarService {
    private final StarRepository starRepository;
    private final BrightnessRepository brightnessRepository;
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final ConstellationService constellationService;

    @Transactional
    public CreateStarResDto create(CreateStarReqDto dto) {
        Member member = memberService.getCurrentMember();
        int starCount = member.plusStarCount();

        Long constellationId = dto.getConstellationId();
        checkCompletion(constellationId);

        Constellation constellation = constellationService.findConstellationById(constellationId);
        Star star = dto.toEntity(constellation, member);
        Long createdId = starRepository.save(star).getId();

        constellationService.updateConstellationStarCount(constellationId, 1);
        return new CreateStarResDto(createdId, dto.getTitle(), starCount, member.getConstellationLimit());
    }

    public ReadStarDto read(Long id) {
        Star star = findStarById(id);
        Long memberId = memberService.getCurrentMember().getId();
        BrightnessId brightnessId = new BrightnessId(memberId, id);
        boolean alreadyLiked = brightnessRepository.existsById(brightnessId);
        List<ReadCommentItemDto> commentList = convertToCommentListDto(star.getCommentList());
        return ReadStarDto.from(star, memberId, alreadyLiked, commentList);
    }

    @Transactional(readOnly = true)
    public List<ReadMyStarListResDto> readMyStarList(String nickname) {
        Long memberId = memberService.detailUser(nickname).getId();
        List<Star> starList = starRepository.findAllByMemberId(memberId);
        return convertToMyStarListDto(starList);
    }

    @Transactional
    public UpdateStarResDto update(UpdateStarReqDto dto, Long starId) {
        Long memberId = memberService.getCurrentMember().getId();
        starRepository.findById(starId).orElseThrow(
                () -> new NotFoundException(FailCode.STAR_NOT_FOUND)
        );
        Star star = starRepository.findByIdAndMemberId(starId, memberId).orElseThrow(
                () -> new NotFoundException(FailCode.STAR_MEMBER_NOT_FOUND)
        );

        if(StringUtils.hasText(dto.getTitle())) {
            star.setTitle(dto.getTitle());
        }

        if(StringUtils.hasText(dto.getContent())) {
            star.setContent(dto.getContent());
        }

        if(StringUtils.hasText(dto.getContent())) {
            star.setImageUrl(dto.getImageUrl());
        }

        return new UpdateStarResDto(starId, star.getTitle());
    }

    @Transactional
    public BrightnessResDto updateBrightness(Long id, int likeDiff) {
        Star star = findStarById(id);
        Long memberId = memberService.getCurrentMember().getId();
        checkLikeValidation(memberId, star, likeDiff);

        star.setBrightness(star.getBrightness() + likeDiff);
        constellationService.updateTotalBrightness(star.getConstellation(), likeDiff);
        updateBrightnessRepository(memberId, star, likeDiff);

        return new BrightnessResDto(id, star.getTitle(), star.getBrightness());
    }

    @Transactional
    public boolean updateBrightnessRepository(Long memberId, Star star, int likeDiff) {
        if(likeDiff >= 0) {
            brightnessRepository.save(new Brightness(memberService.detailUser(memberId), star));
        }
        else {
            brightnessRepository.delete(findBrightnessById(memberId, star.getId()));
        }
        return true;
    }

    @Transactional
    public DeleteStarResDto delete(Long starId) {
        Long memberId = memberService.getCurrentMember().getId();
        starRepository.findById(starId).orElseThrow(
                () -> new NotFoundException(FailCode.STAR_NOT_FOUND)
        );
        Star star = starRepository.findByIdAndMemberId(starId, memberId).orElseThrow(
                () -> new NotFoundException(FailCode.STAR_MEMBER_NOT_FOUND)
        );
        Long constellationId = star.getConstellation().getId();
        starRepository.delete(star);

        constellationService.updateConstellationStarCount(constellationId, -1);
        return new DeleteStarResDto(true);
    }

    @Transactional(readOnly = true)
    public List<StarItemDto> searchByContent(String word) {
        List<Star> starList = starRepository.findAllByContentContains(word);
        return constellationService.convertToStarListDto(starList);
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

    @Transactional(readOnly = true)
    public Brightness findBrightnessById(Long memberId, Long starId) {
        BrightnessId brightnessId = new BrightnessId(memberId, starId);
        return brightnessRepository.findById(brightnessId).orElseThrow(
                () -> new NotFoundException(FailCode.BRIGHTNESS_NOT_FOUND)
        );
    }

    private boolean checkCompletion(Long constellationId) {
        if(constellationService.isCompletion(constellationId)) {
            throw new CustomException(FailCode.ALREADY_COMPLETED_CONSTELLATION);
        }
        return true;
    }

    private boolean checkLikeValidation(Long memberId, Star star, int diff) {
        BrightnessId id = new BrightnessId(memberId, star.getId());
        boolean alreadyLiked = brightnessRepository.existsById(id);
        if(diff >= 0 && alreadyLiked) {
            throw new CustomException(FailCode.ALREADY_LIKED_STAR);
        }
        if((diff < 0 && !alreadyLiked)) {
            throw new CustomException(FailCode.BRIGHTNESS_NOT_FOUND);
        }
        if(diff < 0 && star.getBrightness() <= 0) {
            throw new CustomException(FailCode.MINUS_STAR);
        }
        return true;
    }

    private List<ReadMyStarListResDto> convertToMyStarListDto(List<Star> starList) {
        return starList.stream()
                .map(star -> ReadMyStarListResDto.builder()
                        .starId(star.getId())
                        .constellationId(star.getConstellation().getId())
                        .createdAt(star.getCreatedAt())
                        .updatedAt(star.getUpdatedAt())
                        .title(star.getConstellation().getTitle())
                        .brightness(star.getBrightness())
                        .content(star.getContent())
                        .imageUrl(star.getImageUrl())
                        .build())
                .collect(Collectors.toList());
    }

    private List<ReadCommentItemDto> convertToCommentListDto(List<Comment> commentList) {
        return commentList.stream()
                .map(com -> new ReadCommentItemDto(
                        com.getId(),
                        com.getMember().getNickname(),
                        com.getMember().getImageUrl(),
                        com.getContent(),
                        com.getCreatedAt()))
                .collect(Collectors.toList());
    }
}