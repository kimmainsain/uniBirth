package com.ssafy.unibirth.common.api;

import com.ssafy.unibirth.common.api.exception.CustomException;
import com.ssafy.unibirth.common.api.exception.DuplicatedException;
import com.ssafy.unibirth.common.api.exception.NotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalControllerAdvice {

    // @ExceptionHandler: @Controller, @RestController가 적용된 Bean내에서 발생하는 예외를 잡아서 하나의 메서드에서 처리해주는 기능
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException exception) {
        return ResponseEntity.fail(exception.getFailCode());
    }

    @ExceptionHandler(DuplicatedException.class)
    public ResponseEntity handleNotFoundException(DuplicatedException exception) {
        return ResponseEntity.fail(exception.getFailCode());
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity handleNotFoundException(CustomException exception) {
        return ResponseEntity.fail(exception.getFailCode());
    }
}
