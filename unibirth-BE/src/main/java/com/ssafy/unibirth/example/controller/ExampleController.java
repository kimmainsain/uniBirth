package com.ssafy.unibirth.example.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/example")
@CrossOrigin(origins = "*")
public class ExampleController {

    @GetMapping
    public ResponseEntity<String> hello() {
        String hello = "hello unibirth";
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, hello);
    }
}
