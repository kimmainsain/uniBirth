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

    private Long memberId;
    private String nickname;
    @Enumerated(EnumType.STRING)
    private Role role;

    public LoginResponseDto(Long id, String nickname, Role role) {
        this.memberId = id;
        this.nickname = nickname;
        this.role = role;
    }
}
