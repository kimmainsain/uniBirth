package com.ssafy.unibirth.member.domain;

import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
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
    private int starCount; // 작성한 별의 수

    @ManyToOne
    @JoinColumn(name = "zordiac_id")
    private Zodiac zodiac;

    private int purchasedBoard;
    private String introduction;

    private Date birth;
    private String imageUrl;

    // Test를 위해 id, nickname, email만 인자로 받는 생성자를 만들어줌


    public Member(String nickname, String password) {
        this.nickname = nickname;
        this.password = password;
    }

    // 유저 정보(닉네임, 비밀번호) 변경
    public void updateMember(String nickname, String password) {
        this.nickname = nickname;
        this.password = password;
    }

    // 멤버 상태를 삭제로 전환
    // 멤버 자체를 데이터베이스에서 삭제해버리면 cascade된 별과 별자리까지 모두 삭제됨
    // => 상태만 삭제된 것으로 바꿔주자
    public void deleteMember() {
        this.role = Role.DELETED;
    }


}
