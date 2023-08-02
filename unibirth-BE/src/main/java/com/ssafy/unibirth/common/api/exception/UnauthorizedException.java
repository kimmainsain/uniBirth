package com.ssafy.unibirth.common.api.exception;

import com.ssafy.unibirth.common.api.status.FailCode;
import lombok.Getter;

@Getter
public class UnauthorizedException extends RuntimeException {
    private final FailCode failCode;

    public UnauthorizedException(FailCode failCode) {
        super(failCode.getMessage());
        this.failCode = failCode;
    }
}
