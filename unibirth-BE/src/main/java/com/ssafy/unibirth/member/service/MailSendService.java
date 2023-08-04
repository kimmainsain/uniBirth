package com.ssafy.unibirth.member.service;

import com.ssafy.unibirth.common.redis.util.RedisUtil;
import jakarta.mail.Message;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MailSendService {

    private final JavaMailSender javaMailSender;
    private final RedisUtil redisUtil;

    private MimeMessage createMessage(String code, String email) throws Exception {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(Message.RecipientType.TO, email);
        message.setSubject("이메일 인증 번호입니다.");
        message.setText("이메일 인증코드: "+code);

        message.setFrom("ssafyEmailCheck@gmail.com");

        return message;
    }

    public void sendMail(String code, String email) throws Exception {
        try {
            MimeMessage mimeMessage = createMessage(code, email);
            javaMailSender.send(mimeMessage);
        } catch (MailException mailException) {
            mailException.printStackTrace();
            throw new IllegalAccessException();
        }
    }

    public String sendCertificationMail(String email) throws Exception {
        try {
            String code = UUID.randomUUID().toString().substring(0, 6);
            sendMail(code, email);

            redisUtil.setDataExpire(email, code, 180L); // key, value 5분 동안 저장

            return code;
        } catch (Exception e) {
            e.printStackTrace();
            throw new IllegalAccessException();
        }
    }
}
