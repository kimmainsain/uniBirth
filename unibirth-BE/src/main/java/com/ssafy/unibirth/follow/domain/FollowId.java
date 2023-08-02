package com.ssafy.unibirth.follow.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class FollowId implements Serializable {

    @Column(name = "followFrom")
    private Long followFrom;

    @Column(name = "followTo")
    private Long followTo;

    public FollowId(Long followFrom, Long followTo){
        this.followFrom = followFrom;
        this.followTo = followTo;
    }

    public FollowId() {

    }
}
