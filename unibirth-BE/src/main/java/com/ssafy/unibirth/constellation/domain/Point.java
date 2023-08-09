package com.ssafy.unibirth.constellation.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Point {
    private double x;
    private double y;
    private double z;
    private int brightness;
}