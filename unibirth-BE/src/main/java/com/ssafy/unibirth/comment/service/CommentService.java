package com.ssafy.unibirth.comment.service;

import com.ssafy.unibirth.comment.domain.Comment;
import com.ssafy.unibirth.comment.dto.CreateCommentReqDto;
import com.ssafy.unibirth.comment.dto.CreateCommentResDto;
import com.ssafy.unibirth.comment.dto.DeleteCommentResDto;
import com.ssafy.unibirth.comment.repository.CommentRepository;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import com.ssafy.unibirth.member.domain.Member;
import com.ssafy.unibirth.member.service.MemberService;
import com.ssafy.unibirth.star.domain.Star;
import com.ssafy.unibirth.star.service.StarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final StarService starService;

    @Transactional
    public CreateCommentResDto create(CreateCommentReqDto dto) {
        Member member = memberService.getCurrentMember();
        Star star = starService.findStarById(dto.getStarId());

        Comment comment = new Comment(star, member, dto.getContent());
        Long createdId = commentRepository.save(comment).getId();
        return new CreateCommentResDto(createdId);
    }

    @Transactional
    public DeleteCommentResDto delete(Long commentId) {
        Long currentMemberId = memberService.getCurrentMember().getId();
        Long authorId = findCommentById(commentId).getMember().getId();
        if(currentMemberId != authorId) {
            throw new NotFoundException(FailCode.COMMENT_MEMBER_NOT_FOUND);
        }
        Comment comment = findCommentById(commentId);
        commentRepository.delete(comment);
        return new DeleteCommentResDto(true);
    }

    public Comment findCommentById(Long id) {
        return commentRepository.findById(id).orElseThrow(
                () -> new NotFoundException(FailCode.COMMENT_NOT_FOUND)
        );
    }
}
