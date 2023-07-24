package com.ssafy.unibirth.common.api;

import com.ssafy.unibirth.common.api.status.ErrorCode;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ResponseEntity<T> {
    private int status;
    private String message;
    private T resultData;

    private ResponseEntity(int status, String message, T resultData) {
        this.status = status;
        this.message = message;
        this.resultData = resultData;
    }

    private ResponseEntity(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public static <T> ResponseEntity<T> success(SuccessCode code, T resultData) {
        return new ResponseEntity<>(code.getStatus().value(), code.getMessage(), resultData);
    }

    public static <T> ResponseEntity<T> error(ErrorCode code) {
        return new ResponseEntity<>(code.getStatus().value(), code.getMessage());
    }

    public static <T> ResponseEntity<T> error(HttpStatus status, String message) {
        return new ResponseEntity<>(status.value(), message);
    }
}
