package com.ssafy.unibirth.member.dto;

import com.ssafy.unibirth.member.domain.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 로그인 성공한 유저의 정보를 반환
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class LoginResDto {

    private String nickname;
    @Enumerated(EnumType.STRING)
    private Role role;
    private int purchasedBoard;
    private int constellationLimit;
    private int starCount;

}
