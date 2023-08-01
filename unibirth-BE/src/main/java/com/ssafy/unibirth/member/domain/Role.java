package com.ssafy.unibirth.member.domain;

import lombok.Getter;

@Getter
public enum Role {
    USER("USER"),
    ADMIN("ADMIN"),
    DELETED("DELETED");

    Role(String value) {
        this.value = value;
    }
    private String value;
}
