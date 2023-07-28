package com.ssafy.unibirth.star.domain;

import com.ssafy.unibirth.member.domain.Member;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Brightness {
    @EmbeddedId
    private BrightnessId id;

    @ManyToOne
    @MapsId("memberId")
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @MapsId("starId")
    @JoinColumn(name = "star_id")
    private Star star;

    public Brightness(Member member, Star star) {
        this.id = new BrightnessId(member.getId(), star.getId());
        this.member = member;
        this.star = star;
    }
}
