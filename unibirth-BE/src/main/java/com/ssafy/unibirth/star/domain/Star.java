package com.ssafy.unibirth.star.domain;

import com.ssafy.unibirth.common.domain.util.BaseEntity;
import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.member.domain.Member;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
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
public class Star extends BaseTimeEntity {

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

    @NotNull
    private String content;
    @ColumnDefault("'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fsbkim24%2F221186610409&psig=AOvVaw17ZT087qblje4zlC7CccXl&ust=1691049058729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjvjOa-vYADFQAAAAAdAAAAABAI'")
    private String imageUrl;

    public Star(Constellation constellation, Member member, String content, String imageUrl) {
        this.constellation = constellation;
        this.member = member;
        this.content = content;
        this.imageUrl = imageUrl;
    }
}
