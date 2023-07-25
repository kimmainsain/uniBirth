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
    CONSTELLATION_NOT_FOUND(NOT_FOUND, "별자리 id가 존재하지 않습니다.");

    private final HttpStatus status;
    private final String message;
}
