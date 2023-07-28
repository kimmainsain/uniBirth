package com.ssafy.unibirth.member.dto;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateProfileReqDto {

    private String imageUrl;
    private String introduction;

}
