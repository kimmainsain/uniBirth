package com.ssafy.unibirth.security.jwt;

import com.ssafy.unibirth.member.service.MemberSecurityService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.util.Date;


@Component
@RequiredArgsConstructor
public class JwtTokenProvider {
    @Value("${jwt.salt}")
    private String SALT;
    @Value("${jwt.header}")
    public String HEADER;
    @Value("${jwt.bearer}")
    public String BEARER;
    @Value("${jwt.expire}")
    public Long EXPIRE;
    private final MemberSecurityService memberSecurityService;
    private final String CLAIM_NAME = "nickname";
    private static byte[] key;

    // 바이트화
    @PostConstruct
    protected void init() {
        key = null;
        try {
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("지원하지 않는 인코딩입니다.");
        }
    }
    
    // Jwt 토큰 생성
    public String createToken(String nickname) {
        String subject = "access-token";

        Claims claims = Jwts.claims().setSubject(subject);
        claims.put(CLAIM_NAME, nickname);
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + EXPIRE)) // 만료일
                .signWith(SignatureAlgorithm.HS512, key) // 암호화
                .compact();
    }

    // 토큰 인증
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = memberSecurityService.loadUserByUsername(this.getNickname(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // 토큰에서 claim name 값으로 추출
    public String getNickname(String token) {
        String nickname = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().get(CLAIM_NAME, String.class);
        return nickname;
    }

    // 요청 헤더로 부터 토큰 추출
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("Authorization");
    }

    public void setHeaderAccessToken(HttpServletResponse response, String accessToken) {
        response.setHeader(HEADER, accessToken);
    }
}