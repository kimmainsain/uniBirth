package com.ssafy.unibirth.member.dto;

import lombok.*;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistReqDto {

    private String nickname;
    private String password;
    private String email;
    private Long planetId;
    private String introduction;
    private Date birth;
    private String imageUrl;
    
}