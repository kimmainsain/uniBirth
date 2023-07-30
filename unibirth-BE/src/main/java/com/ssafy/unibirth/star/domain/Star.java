package com.ssafy.unibirth.star.domain;

import com.ssafy.unibirth.common.domain.util.BaseEntity;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.member.domain.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Star extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "star_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "constellation_id")
    private Constellation constellation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ColumnDefault("0")
    private int brightness; // 좋아요

    private String content;
    private String imageUrl;

    public Star(Constellation constellation, Member member, String content, String imageUrl) {
        this.constellation = constellation;
        this.member = member;
        this.content = content;
        this.imageUrl = imageUrl;
    }
}
