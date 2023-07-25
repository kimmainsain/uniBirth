package com.ssafy.unibirth.common.api;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalControllerAdvice {
    
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException exception) {
        return ResponseEntity.fail(exception.getFailCode());
    }
}
