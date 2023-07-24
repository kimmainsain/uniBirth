package com.ssafy.unibirth.member.exception;

public class MemberNotFoundException extends IllegalStateException {
    public MemberNotFoundException(String message) {
        super(message);
    }
}
