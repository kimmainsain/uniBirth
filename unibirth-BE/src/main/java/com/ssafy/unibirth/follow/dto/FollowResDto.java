package com.ssafy.unibirth.follow.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FollowResDto {
    private Long follow_from;
    private Long follow_to;
}
