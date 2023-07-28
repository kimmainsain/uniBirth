package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 로그인 성공한 유저의 정보를 반환
@NoArgsConstructor
@Getter
public class LoginResponseDto {

    private String nickname;
    private String email;
    @Enumerated(EnumType.STRING)
    private Role role;

    public LoginResponseDto(String nickname, String email, Role role) {
        this.nickname = nickname;
        this.email = email;
        this.role = role;
    }
}
