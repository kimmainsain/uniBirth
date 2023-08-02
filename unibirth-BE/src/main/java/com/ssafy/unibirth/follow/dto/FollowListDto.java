package com.ssafy.unibirth.follow.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class FollowListDto {

    private String imageUrl;
    private String nickname;
}
