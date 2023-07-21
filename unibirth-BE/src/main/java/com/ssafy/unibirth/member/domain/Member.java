package com.ssafy.unibirth.member.domain;

import com.ssafy.unibirth.zodiac.domain.Zodiac;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String name;
    private String nickname;
    private String password;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role; // USER, ADMIN, DELETED

    private int followingCount;
    private int follwerCount;
    private int starCount; // 좋아요 수

    @ManyToOne
    @JoinColumn(name = "zordiac_id")
    private Zodiac zodiac;

    private int purchasedBoard;
    private String introduction;

    private Date birth;
    private String imageURL;

}
