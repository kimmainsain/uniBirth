package com.ssafy.unibirth.security;

import com.ssafy.unibirth.common.api.exception.UnauthorizedException;
import com.ssafy.unibirth.common.api.status.FailCode;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtil {
    private SecurityUtil() {
    }

    public static String getCurrentNickname() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || authentication.getName() == null) {
            throw new UnauthorizedException(FailCode.UNAUTHORIZED_MEMBER);
        }

        return authentication.getName();
    }
}
