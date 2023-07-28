package com.ssafy.unibirth.common.api.status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
@AllArgsConstructor
public enum FailCode {
    GENERAL_ERROR(BAD_REQUEST, "데이터 처리 실패"),
    
    // 별자리
    PLANET_NOT_FOUND(NOT_FOUND, "존재하지 않은 행성입니다."),
    CONSTELLATION_NOT_FOUND(NOT_FOUND, "존재하지 않는 별자리입니다."),
    MEMBER_NOT_FOUND(NOT_FOUND, "존재하지 않는 회원입니다."),

    DUPLICATED_NICKNAME(CONFLICT, "중복된 닉네임입니다."),
    DUPLICATED_EMAIL(CONFLICT, "중복된 이메일입니다."),

    // 팔로우
    FOLLOWER_NOT_FOUND(NOT_FOUND, "팔로우하는 유저가 아닙니다.");

    private final HttpStatus status;
    private final String message;
}
