package com.ssafy.unibirth.member.dto;

import lombok.*;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class RegistRequestDto {

    private String nickname;
    private String password;
    private String email;
    private String introduction;
    private Date birth;
    private String imageUrl;

    public RegistRequestDto(){}
}