package com.ssafy.unibirth.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReadCommentItemDto {
    private Long commentId;
    private String nickname;
    private String imageUrl;
    private String content;
    private LocalDateTime createdAt;
}
