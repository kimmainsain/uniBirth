package com.ssafy.unibirth.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.unibirth.common.api.ResponseEntity;
import com.ssafy.unibirth.common.api.status.FailCode;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private JwtTokenProvider jwtTokenProvider;
    public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String token = jwtTokenProvider.resolveToken(request);
            if(token != null && token.length() != 0) {
                Authentication auth = jwtTokenProvider.getAuthentication(token);
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
            filterChain.doFilter(request, response);
        }catch (ExpiredJwtException e){
            sendFailResponse(response, FailCode.TOKEN_EXPIRED);
        }catch (JwtException | IllegalArgumentException e){
            sendFailResponse(response, FailCode.INVALID_TOKEN);
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }



    private void sendFailResponse(HttpServletResponse response, FailCode failCode
    ){
        try{
            ObjectMapper objectMapper = new ObjectMapper();
            response.setCharacterEncoding("utf-8");
            response.setStatus(failCode.getStatus().value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.getWriter().write(objectMapper.writeValueAsString(ResponseEntity.fail(failCode)));
        }catch (IOException e){
            e.printStackTrace();
        }
    }

}