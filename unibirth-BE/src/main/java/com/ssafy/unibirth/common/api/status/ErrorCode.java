package com.ssafy.unibirth.common.api.status;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.HttpStatus.OK;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    GENERAL_ERROR(BAD_REQUEST, "데이터 처리 실패");

    private final HttpStatus status;
    private final String message;
}
