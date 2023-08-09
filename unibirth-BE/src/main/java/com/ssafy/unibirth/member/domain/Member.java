package com.ssafy.unibirth.member.domain;

import com.ssafy.unibirth.common.domain.util.BaseTimeEntity;
import com.ssafy.unibirth.constellation.domain.Constellation;
import com.ssafy.unibirth.member.dto.RegistRequestDto;
import com.ssafy.unibirth.member.dto.UpdateProfileReqDto;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;
    @NotNull
    private String nickname;
    @NotNull
    private String password;

    @Column(name="email" , unique=true)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER; // USER, ADMIN, DELETED

    @ColumnDefault("0")
    private int followingCount;
    @ColumnDefault("0")
    private int followerCount;

    // 본인 생일에 해당하는 황도 12궁 이름
    private String zodiac;

    // 관심 행성의 아이디
    private Long planetId;

    // 내가 작성한 별자리 목록
    @OneToMany(mappedBy = "member")
    private List<Constellation> constellationList = new ArrayList<>();

    private int purchasedBoard = 5;
    private int purchasedPin = 6;

    private String introduction;

    private Date birth;
    private String imageUrl;

    public Member(String nickname, String password) {
        this.nickname = nickname;
        this.password = password;
    }

    // 유저 정보(닉네임, 비밀번호) 변경
    public void updateMember(String password) {
        this.password = password;
    }

    public void inFollowerCount(){
        this.followerCount +=1;
    }

    public void deFollowerCount(){
        this.followerCount -=1;
    }

    public void inFollowingCount(){
        this.followingCount +=1;
    }

    public void deFollowingCount(){
        this.followingCount -=1;
    }

    // 멤버 상태를 삭제로 전환
    // 멤버 자체를 데이터베이스에서 삭제해버리면 cascade된 별과 별자리까지 모두 삭제됨
    // => 상태만 삭제된 것으로 바꿔주자
    public void deleteMember() {
        this.role = Role.DELETED;
    }
    
    // 결재하면 격자판을 10칸으로 추가함
    public void plusBlock() {
        this.purchasedBoard += 5;
    }

    // 결재하면 핀할 수 있는 별자리 갯수를 6개에서 12개로 늘림
    public void plusPin() {
        this.purchasedPin += 6;
    }

    // 프로필 수정
    public void updateProfile(UpdateProfileReqDto updateProfileReqDto) {
        this.imageUrl = updateProfileReqDto.getImageUrl();
        this.introduction = updateProfileReqDto.getIntroduction();
    }

    // 회원가입할 때 입력된 값을 Member 엔티티에 담아줌
    public Member(RegistRequestDto registRequestDto, String password) {
        this.nickname = registRequestDto.getNickname();
        this.password = password;
        this.email = registRequestDto.getEmail();
        this.planetId = registRequestDto.getPlanetId();
        this.introduction = registRequestDto.getIntroduction();
        this.birth = registRequestDto.getBirth();
        this.imageUrl = registRequestDto.getImageUrl();
    }
}
