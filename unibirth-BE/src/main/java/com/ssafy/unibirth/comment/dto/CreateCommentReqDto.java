package com.ssafy.unibirth.comment.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateCommentReqDto {
    private Long starId;
    private String content;
}
