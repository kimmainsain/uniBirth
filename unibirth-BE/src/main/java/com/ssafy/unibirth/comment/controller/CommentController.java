package com.ssafy.unibirth.comment.controller;

import com.ssafy.unibirth.comment.dto.CreateCommentReqDto;
import com.ssafy.unibirth.comment.service.CommentService;
import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
@CrossOrigin(origins = "*")
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/register")
    public ResponseEntity createComment(@RequestBody CreateCommentReqDto dto) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, commentService.create(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removePin(@PathVariable("id") Long commentId) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, commentService.delete(commentId));
    }
}
