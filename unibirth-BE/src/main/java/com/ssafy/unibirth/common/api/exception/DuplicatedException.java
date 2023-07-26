package com.ssafy.unibirth.common.api.exception;

import com.ssafy.unibirth.common.api.status.FailCode;
import lombok.Getter;

@Getter
public class DuplicatedException extends RuntimeException{
    private final FailCode failCode;

    public DuplicatedException(FailCode failCode) {
        super(failCode.getMessage());
        this.failCode = failCode;
    }
}
