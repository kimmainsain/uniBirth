package com.ssafy.unibirth.follow.domain;

import com.ssafy.unibirth.member.domain.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Follow {

    @EmbeddedId
    private FollowId id;

    @ManyToOne
    @MapsId("followFrom")
    @JoinColumn(name = "followFrom")
    private Member followFrom;

    @ManyToOne
    @MapsId("followTo")
    @JoinColumn(name = "followTo")
    private Member followTo;

}