package com.ssafy.unibirth.constellation.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class PinId implements Serializable {
    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "constellation_id")
    private Long constellationId;

    public PinId(Long memberId, Long constellationId){
        this.memberId = memberId;
        this.constellationId = constellationId;
    }

    public PinId() {}
}
