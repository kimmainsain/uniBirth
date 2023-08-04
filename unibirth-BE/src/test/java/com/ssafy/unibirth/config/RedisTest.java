package com.ssafy.unibirth.config;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.ssafy.unibirth.common.redis.util.RedisUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RedisTest {
    @Autowired
    private RedisUtil redisUtil;
    private final String KEY_TEST = "key01";
    private final String VALUE_TEST = "1111";

    @BeforeEach
    void setKey() {
        redisUtil.setDataExpire(KEY_TEST, VALUE_TEST, 60*5L);
    }

    @Test
    void getKey() {
        assertEquals(VALUE_TEST, redisUtil.getData(KEY_TEST));
    }

    @Test
    void deleteKey() {
        redisUtil.deleteData(KEY_TEST);
        assertEquals(false, redisUtil.existsData(KEY_TEST));
    }
}
