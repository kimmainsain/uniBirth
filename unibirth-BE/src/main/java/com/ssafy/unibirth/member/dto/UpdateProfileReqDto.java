package com.ssafy.unibirth.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateProfileReqDto {

    private String imageUrl;
    private String introduction;
    private Long planetId;

}
