package com.ssafy.unibirth.search.controller;

import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.SuccessCode;
import com.ssafy.unibirth.search.service.SearchService;
import io.lettuce.core.dynamic.annotation.Param;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/search")
@CrossOrigin(origins = "*")
public class SearchController {
    private final SearchService searchService;

    @GetMapping("")
    public ResponseEntity getConstellation(@RequestParam("category") String category, @RequestParam("word") String word) {
        return ResponseEntity.success(SuccessCode.GENERAL_SUCCESS, searchService.search(category, word));
    }
}
