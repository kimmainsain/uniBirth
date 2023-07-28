package com.ssafy.unibirth.star.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class BrightnessId implements Serializable {
    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "star_id")
    private Long starId;

    public BrightnessId(Long memberId, Long starId){
        this.memberId = memberId;
        this.starId = starId;
    }

    public BrightnessId() {}
}
