package com.ssafy.unibirth.follow.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class FollowListDto {

    private Long follow_id;
    private String image_url;
    private String nickname;
}
