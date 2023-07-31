package com.ssafy.unibirth.constellation.domain;

import com.ssafy.unibirth.member.domain.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Pin {
    @EmbeddedId
    private PinId id;

    @ManyToOne
    @MapsId("memberId")
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @MapsId("constellationId")
    @JoinColumn(name = "constellation_id")
    private Constellation constellation;

    public Pin(Member member, Constellation constellation) {
        this.id = new PinId(member.getId(), constellation.getId());
        this.member = member;
        this.constellation = constellation;
    }
}
