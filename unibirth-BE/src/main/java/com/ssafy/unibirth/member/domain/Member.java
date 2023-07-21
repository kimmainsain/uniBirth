package com.ssafy.unibirth.member.domain;

import com.ssafy.unibirth.common.whenAndWho.BaseTimeEntity;
import com.ssafy.unibirth.zodiac.domain.Zodiac;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;
    private String name;
    private String nickname;
    private String password;
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role; // USER, ADMIN, DELETED

    private int followingCount;
    private int followerCount;
    private int starCount; // 좋아요 수

    @ManyToOne
    @JoinColumn(name = "zordiac_id")
    private Zodiac zodiac;

    private int purchasedBoard;
    private String introduction;

    private Date birth;
    private String imageUrl;

    // 멤버 상태를 삭제로 전환
    // 멤버 자체를 데이터베이스에서 삭제해버리면 cascade된 별과 별자리까지 모두 삭제됨
    // => 상태만 삭제된 것으로 바꿔주자
    public void deleteMember() {
        this.role = Role.DELETED;
    }


}
