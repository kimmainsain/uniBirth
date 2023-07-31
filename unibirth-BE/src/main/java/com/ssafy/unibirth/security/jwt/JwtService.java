package com.ssafy.unibirth.security.jwt;

import com.ssafy.unibirth.common.api.exception.NotFoundException;
import com.ssafy.unibirth.common.api.status.FailCode;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import java.io.UnsupportedEncodingException;
import java.sql.Date;

@Component
public class JwtService {

    @Value("${jwt.salt}")
    private String SALT;

    @Value("${jwt.header}")
    public String HEADER;

    @Value("${jwt.bearer}")
    public String BEARER;

    @Value("${jwt.expire}")
    public Long EXPIRE;

    // 토큰 생성
    public <T> String createAccessToken(String key, Long data) {
        String subject = "access-token";
        System.out.println(HEADER);
        System.out.println(BEARER);
        System.out.println(EXPIRE);
        System.out.println(SALT);

        Claims claims = Jwts.claims()
                .setSubject(subject)
                // 생성일
                .setIssuedAt(new Date(System.currentTimeMillis()))
                // 만료일
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE));
        // ID
        claims.put(key, data);

        String jwt = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setClaims(claims)
                .signWith(SignatureAlgorithm.HS512, this.generateKey())
                .compact();

        return jwt;
    }

    // 키 생성
    private byte[] generateKey() {
        byte[] key = null;
        try {
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("지원하지 않는 인코딩입니다.");
        }
        return key;
    }

    // 토큰에서 id값 가져오기
    public Long getIdFromToken(HttpServletRequest request) throws NotFoundException {
        String accessToken = resolveToken(request);

        try {
            Long id = (Long)Jwts.parser().setSigningKey(SALT.getBytes()).parseClaimsJws(accessToken).getBody().get("id");
            return id;
        }
        catch (Exception E){
            throw new NotFoundException(FailCode.ID_NOT_FOUND);
        }

    }

    private String resolveToken(HttpServletRequest request){
        String bearerToken = request.getHeader(HEADER);
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith(BEARER)){
            return bearerToken.substring(7);
        }
        return null;
    }

    public void setHeaderAccessToken(HttpServletResponse response, String accessToken) {
        response.setHeader(HEADER, accessToken);
    }

}

