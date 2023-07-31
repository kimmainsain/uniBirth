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
    STAR_NOT_FOUND(NOT_FOUND, "존재하지 않는 별입니다."),
    BRIGHTNESS_NOT_FOUND(NOT_FOUND, "좋아요 이력이 없습니다"),
    PIN_NOT_FOUND(NOT_FOUND, "핀 이력이 없습니다."),

    ALREADY_COMPLETED_CONSTELLATION(BAD_REQUEST, "이미 완성된 별자리입니다."),
    ALREADY_LIKED_STAR(BAD_REQUEST, "이미 좋아요한 별입니다."),
    ALREADY_PINED_CONSTELLATION(BAD_REQUEST, "이미 핀한 별자리입니다."),
    MINUS_STAR(BAD_REQUEST, "밝기가 0인 별은 좋아요 취소할 수 없습니다."),

    // 회원가입
    DUPLICATED_NICKNAME(CONFLICT, "중복된 닉네임입니다."),
    DUPLICATED_EMAIL(CONFLICT, "중복된 이메일입니다."),

    // 로그인
    EMAIL_NOT_FOUND(NOT_FOUND, "이메일이 잘못 입력되었거나, 가입되지 않은 이메일입니다."),
    PASSWORD_NOT_FOUND(NOT_FOUND, "비밀번호가 잘못 입력되었습니다."),

    // 팔로우
    FOLLOWER_NOT_FOUND(NOT_FOUND, "팔로우하는 유저가 아닙니다.");

    private final HttpStatus status;
    private final String message;
}
