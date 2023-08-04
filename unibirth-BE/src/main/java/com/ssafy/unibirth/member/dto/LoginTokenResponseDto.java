package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginTokenResponseDto {

    private String accessToken;
    private String nickname;
    @Enumerated(EnumType.STRING)
    private Role role;
    private int purchasedBoard;
}

