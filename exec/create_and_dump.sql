create table member
(
    constellation_limit int                               not null,
    follower_count      int default 0                     not null,
    following_count     int default 0                     not null,
    purchased_board     int                               not null,
    purchased_pin       int                               not null,
    star_count          int                               not null,
    birth               datetime(6)                       null,
    created_at          datetime(6)                       null,
    member_id           bigint auto_increment
        primary key,
    planet_id           bigint                            null,
    updated_at          datetime(6)                       null,
    email               varchar(255)                      null,
    image_url           varchar(255)                      null,
    introduction        varchar(255)                      null,
    nickname            varchar(255)                      not null,
    password            varchar(255)                      not null,
    role                enum ('ADMIN', 'DELETED', 'USER') null,
    zodiac              varchar(255)                      null,
    constraint UK_mbmcqelty0fbrvxp1q58dn57t
        unique (email)
);

INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 1, 2, 5, 6, 4, null, '2023-08-17 15:12:46.162394', 1, 4, '2023-08-17 17:04:38.984704', 'rtx0@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F%EB%AC%B8%EC%96%B4%EB%B0%95%EC%82%AC.jpg?alt=media&token=8ebd4944-10f2-479c-aa0e-6b9121a92d48', '문어박사 x 문어석사 o', '문어석사', '$2a$10$YMsNl9yChcW6mBSrawHssuA9AR.mhWKswWIYiQ0PP8exeGtgNbe42', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 2, 0, 5, 6, 2, null, '2023-08-17 15:13:26.811101', 2, 1, '2023-08-17 16:11:07.973340', 'rtx2@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fanfrh.jfif?alt=media&token=b74a6376-8308-465b-9e8e-0c7583868c7c', '광광우럭다', '광어우럭삼치', '$2a$10$kSdIoPiQefZnYM/TmQETm.A/ckV1mIqjfnQqK25diLtDB8scYmdRi', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 1, 5, 6, 1, null, '2023-08-17 15:14:07.115834', 3, 1, '2023-08-17 15:39:26.800284', 'rtx1@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.jfif?alt=media&token=845711b3-f163-4328-96de-430bb336bc82', '12/25까지 숨참고 존버함', '크리스마스의악몽', '$2a$10$dLo7IxX0BxA9nuD/igOneuubqShsP/av97ZHEI52scWwFAogYyxxy', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 2, null, '2023-08-17 15:14:36.250168', 4, 5, '2023-08-17 16:09:12.627971', 'rtx10@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F%ED%95%B4%EB%8B%AC%EC%88%98%EB%8B%AC.jpg?alt=media&token=5d859984-6097-49f5-845f-e7f9f510835a', '저녁메뉴추천받아요', '팬돌이', '$2a$10$QR7goibAm1eXq2Pe00xITuTpOjfiHyFQwYOT3WlgX/kjNeh9HKx06', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (3, 2, 1, 5, 6, 2, null, '2023-08-17 15:14:54.982555', 5, 7, '2023-08-17 16:06:42.953743', 'rtx3@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fchick.jfif?alt=media&token=a9f7c092-b3c1-4b80-8ce8-0272edcf0996', '닭가져와!!!', '닭이아니면죽음을', '$2a$10$jrb6rq6gcFL8ctndyukmM.sl0iLQwVpD2aFlU9tzXVrCSCfrgAX9y', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 1, 5, 6, 3, null, '2023-08-17 15:15:25.447653', 6, 5, '2023-08-17 16:04:30.410655', 'rtx11@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fkid.jfif?alt=media&token=114d28b1-07f5-41a1-b824-9c71f0da92f2', '멈춰!', '네버스탑', '$2a$10$KfK1UaWHbsx0Oad7bXB1..aDlOW7Z4vHZk.Oyy63YyAUk5Dsd/WKS', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 3, null, '2023-08-17 15:15:27.886687', 7, 5, '2023-08-17 16:07:40.012194', 'rtx4@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F%EC%8B%AC%EC%8B%AC%EC%9D%B4.jfif?alt=media&token=b7da84a9-d7ae-40bf-a767-b7688a2c9dbe', '심심해요.. ', '심심한심심이', '$2a$10$CBCur1aJgVmbCeB5Sp0ituzu1CjM.roSXh/TGx4X271x6WXC0EvOy', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 0, null, '2023-08-17 15:16:00.836115', 8, 5, '2023-08-17 15:35:43.733004', 'rtx12@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F7_%EC%82%AC%EC%9E%90%EC%9E%90%EB%A6%AC.png?alt=media&token=66e9e7c0-9a0b-449a-8af6-f81554817357', null, '검정치마', '$2a$10$bHv7ETqAwUpVCRXV6L3MEesWCvYm1FaWK5J.JMXZgJXo/RX8vHfPq', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 1, null, '2023-08-17 15:16:40.336424', 9, 5, '2023-08-17 16:02:34.604200', 'rtx13@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F6_%EA%B2%8C%EC%9E%90%EB%A6%AC.png?alt=media&token=617d80fb-cb5b-40a8-8628-26ff813f4c62', null, '히게단', '$2a$10$k3vEd9WgE1CJStHEZff6YOeU7CJKyvi7uYOUScjRpYNLAOUaDfZjK', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 1, null, '2023-08-17 15:16:52.305915', 10, 3, '2023-08-17 18:03:33.558551', 'rtx5@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fdog.jpg?alt=media&token=cc0894a0-a00d-4ccd-9475-2286b4f5c74d', '물기도 합니다.', '맛잇으면짖는개', '$2a$10$lxzlPhNNZQuMytgQkDeM0erIO/.z8ptsGAthcR3Hyw3/BlhlO8vhy', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 1, null, '2023-08-17 15:17:18.114261', 11, 5, '2023-08-17 16:35:35.662275', 'rtx14@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F5_%EC%8C%8D%EB%91%A5%EC%9D%B4%EC%9E%90%EB%A6%AC.png?alt=media&token=e9846072-66d3-4820-b551-e0162eac9bff', '희희', '무희', '$2a$10$06FoRlAaA0DNVg4OsTdVQOeN7H43y/TcIhiy3z6IPULpxJpePRJhq', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 1, 1, 5, 6, 2, null, '2023-08-17 15:17:52.798101', 12, 6, '2023-08-17 16:38:45.026655', 'rtx6@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fwjrmffld.jfif?alt=media&token=a246793e-9f2b-4090-b86e-0df90e965f7a', '저그유저입니다. 취미는 4드론!', 'zerguser', '$2a$10$ZgSwsQkTeMvKZ5tG5AWtfuTXRM3zguyjzrm3.x70Y6Zewl2V2k/KC', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 1, null, '2023-08-17 15:18:03.647242', 13, 5, '2023-08-17 16:10:37.594251', 'rtx15@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F7_%EC%82%AC%EC%9E%90%EC%9E%90%EB%A6%AC.png?alt=media&token=66e9e7c0-9a0b-449a-8af6-f81554817357', null, '스텔라장', '$2a$10$IsDyUuPZQLwJVFBdT/xz.egaIvaGgB7lLZkCzzY03PKWEKi8bPIsm', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 1, 0, 5, 6, 1, null, '2023-08-17 15:18:14.775819', 14, 1, '2023-08-17 15:48:59.120915', 'rtx7@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Ftbtbbt.jfif?alt=media&token=aadc6de4-90db-48b7-9196-87810286e0f2', '슉 슈슉 슉슉', '너가죽어', '$2a$10$r93rFRGgjd7sFVk6PF3kQeHDrOCB5YFvH7UtNLi3eSeSD0JM4iVhO', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 0, null, '2023-08-17 15:19:06.888863', 15, 7, '2023-08-17 15:49:53.946484', 'rtx8@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fdonut.jfif?alt=media&token=1e12f9f6-da61-4bdc-b6c3-f106a582718c', '지구는 도넛모양입니다만?', '지구는왜둥글죠', '$2a$10$xKV6QvBwCFbOFz68Rp2K0.C4pCnJONdXEsifw8P3oZFjqn4MhXwaK', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 1, 1, 5, 6, 1, null, '2023-08-17 15:19:38.450323', 16, 2, '2023-08-17 15:57:31.425133', 'rtx9@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Face.jfif?alt=media&token=12abb189-7e04-4e11-be85-8ef171e844ae', '조심하세요 저 무서운 사람임', '역삼동불주먹', '$2a$10$5mfjl8OvsK.8gS57xN4.AO8ANIa/69kuLE1F9tTMzpXvEKhJk89Eq', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 1, 0, 5, 6, 2, null, '2023-08-17 15:20:10.045488', 17, 1, '2023-08-17 16:43:15.393373', 'rtx16@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F10_%EC%A0%84%EA%B0%88%EC%9E%90%EB%A6%AC.png?alt=media&token=fc85ede0-c079-4f2a-aaaf-6a30f6de2016', null, '펀치넬로', '$2a$10$0BnawDIC4QmRlwESJoJ4PeoGWdzBTk5MqutiU8OOtvx53PciR8bGq', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 1, 5, 6, 1, null, '2023-08-17 15:20:45.096456', 18, 5, '2023-08-17 16:06:42.953552', 'rtx17@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F12_%EC%97%BC%EC%86%8C%EC%9E%90%EB%A6%AC.png?alt=media&token=4b2af018-a202-4ee0-b2ab-db597f559e17', 'ㅇㅇ', '페리도트', '$2a$10$ag/7L.5XX5Goz3Bmt78U8eiIwO3bZXesEztjBSCbh9/YCLe5daWKm', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 1, null, '2023-08-17 15:21:14.055474', 19, 5, '2023-08-17 16:06:41.731897', 'rtx18@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F1_%EB%AC%BC%EB%B3%91%EC%9E%90%EB%A6%AC.png?alt=media&token=2d260b56-1085-4631-b021-3ed6a7b53890', null, '김마늘', '$2a$10$ED8NyhvioCGCGAr.IkO/wuuY2vIym2QNJ4eHGvWs8bFhHIL.esh3a', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (3, 2, 1, 5, 6, 2, null, '2023-08-17 15:22:05.090123', 20, 7, '2023-08-17 16:51:48.114333', 'rtx19@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F1692254807200.jpg?alt=media&token=37557c7e-04ea-47fe-8776-55c7bfb1ee0b', '푸바오는 사랑입니다..♡', '솔의눈', '$2a$10$e7Vmo8DvE6BVqg0TEu/ZAuAF7OgW2Bm6VFCWCLxdDBtBpfFJkQoXS', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 0, null, '2023-08-17 15:40:46.185281', 21, 7, '2023-08-17 15:45:37.472357', 'pubao@pubao.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FScreenshot_20230817_154155_YouTube.jpg?alt=media&token=4397fa96-7417-4e68-8fe8-89095b46e390', '푸바오 너무 좋아', '푸바오', '$2a$10$j4CIOJD/cEW5zQBjvLEis.I/iPgefykKwyvn5loB5pH3ihwUb69ZO', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 1, 2, 5, 6, 5, null, '2023-08-17 15:48:28.321095', 22, 0, '2023-08-17 17:20:42.282689', 'rr@gmail.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fnnn.png?alt=media&token=c9a5a889-2d94-4ed6-8e7c-75f9d1c9db7a', '포켓몬 좋아요!', '류니', '$2a$10$6F9BBWg1BboCnjPy7ezY5.4rBd2iQb1PUlpnpYTQhlr6Kao4bIF4G', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 0, null, '2023-08-17 16:36:02.627142', 23, 1, '2023-08-17 16:36:02.627142', 'rtx20@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F4_%ED%99%A9%EC%86%8C%EC%9E%90%EB%A6%AC.png?alt=media&token=ed4e7900-fc19-47cc-9726-aa7978810fc8', null, '쿠크다스멘탈', '$2a$10$QJtppQ3uULbOINZs1RjDFOSk4OkhRkbzHOR4X8J.7jJrp.6A9MiFq', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 1, 5, 6, 0, null, '2023-08-17 16:53:25.850222', 24, 1, '2023-08-17 17:20:42.282516', 'lee@lee.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F10_%EC%A0%84%EA%B0%88%EC%9E%90%EB%A6%AC.png?alt=media&token=fc85ede0-c079-4f2a-aaaf-6a30f6de2016', null, 'BackLee', '$2a$10$GguJcQ1VXufK1bkRQ7hZ/elugAC66dVTxE4ZJvShxGmFOkNbzjJOW', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (5, 0, 0, 5, 6, 1, null, '2023-08-17 17:07:23.302688', 25, 4, '2023-08-17 17:08:43.782847', 'bljh1008@naver.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F12_%EC%97%BC%EC%86%8C%EC%9E%90%EB%A6%AC.png?alt=media&token=4b2af018-a202-4ee0-b2ab-db597f559e17', null, '혜림코치', '$2a$10$IRZ45NdlHl4hreqCE7sEKOcP/QBa15BT/NPdAwMgT8vNwqq1ri58q', 'USER', null);
INSERT INTO member (constellation_limit, follower_count, following_count, purchased_board, purchased_pin, star_count, birth, created_at, member_id, planet_id, updated_at, email, image_url, introduction, nickname, password, role, zodiac) VALUES (4, 0, 0, 5, 6, 0, null, '2023-08-17 17:42:15.396928', 26, 7, '2023-08-17 17:43:19.589777', 'spy@ssafy.com', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2F3_%EC%96%91%EC%9E%90%EB%A6%AC.png?alt=media&token=58ef607f-bfb1-457e-a650-302b0aa5f24a', null, '스파이', '$2a$10$e4nPuUqHTcW1oqHrNE0DPewEZmeNmlmd4Dy9eeHTQt.CAnIDJB2NS', 'USER', null);


create table follow
(
    follow_from bigint not null,
    follow_to   bigint not null,
    primary key (follow_from, follow_to),
    constraint FKcm1dbw5mk6d77i981hf44jllp
        foreign key (follow_from) references member (member_id),
    constraint FKsmpc5eydqy0y82tajex3dcthc
        foreign key (follow_to) references member (member_id)
);

INSERT INTO follow (follow_from, follow_to) VALUES (1, 12);
INSERT INTO follow (follow_from, follow_to) VALUES (1, 20);
INSERT INTO follow (follow_from, follow_to) VALUES (3, 2);
INSERT INTO follow (follow_from, follow_to) VALUES (5, 16);
INSERT INTO follow (follow_from, follow_to) VALUES (6, 5);
INSERT INTO follow (follow_from, follow_to) VALUES (12, 2);
INSERT INTO follow (follow_from, follow_to) VALUES (16, 14);
INSERT INTO follow (follow_from, follow_to) VALUES (18, 5);
INSERT INTO follow (follow_from, follow_to) VALUES (20, 1);
INSERT INTO follow (follow_from, follow_to) VALUES (22, 17);
INSERT INTO follow (follow_from, follow_to) VALUES (22, 20);
INSERT INTO follow (follow_from, follow_to) VALUES (24, 22);


create table planet
(
    created_at datetime(6)                  null,
    planet_id  bigint auto_increment
        primary key,
    updated_at datetime(6)                  null,
    title      varchar(255) default 'title' null
);

INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 1, '2023-08-07 16:05:38.000000', 'Planet1');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 2, '2023-08-07 16:05:38.000000', 'Planet2');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 3, '2023-08-07 16:05:38.000000', 'Planet3');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 4, '2023-08-07 16:05:38.000000', 'Planet4');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 5, '2023-08-07 16:05:38.000000', 'Planet5');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 6, '2023-08-07 16:05:38.000000', 'Planet6');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 7, '2023-08-07 16:05:38.000000', 'Planet7');
INSERT INTO planet (created_at, planet_id, updated_at, title) VALUES ('2023-08-07 16:05:38.000000', 8, '2023-08-07 16:05:38.000000', 'Planet8');



create table constellation
(
    board_size       int    default 10   not null,
    point_count      int    default 0    not null,
    star_count       int    default 0    not null,
    total_brightness int    default 0    not null,
    x                double default 0    not null,
    y                double default 0    not null,
    z                double default 0    not null,
    constellation_id bigint auto_increment
        primary key,
    created_at       datetime(6)         null,
    member_id        bigint              null,
    planet_id        bigint              null,
    updated_at       datetime(6)         null,
    color            varchar(255)        not null,
    description      varchar(255)        not null,
    image_url        varchar(255)        not null,
    line_list        text   default '[]' null,
    point_list       text   default '[]' null,
    title            varchar(255)        not null,
    constraint FK3axshx0m2dhqpdxjqav7qrlde
        foreign key (member_id) references member (member_id),
    constraint FKjd33ai4ssar96ln8m1ng0q5qy
        foreign key (planet_id) references planet (planet_id)
);

INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 10, 6, 6, 0, 0, 0, 1, '2023-08-17 15:22:45.659115', 1, 5, '2023-08-17 17:08:43.782984', '#3ed4be', '세상 모든 치킨들이 모여 자웅을 겨루는 곳. 약한 닭은 살아남을 수 없다..', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692253364099.png?alt=media&token=a01ce8f0-f059-41ef-b063-8f1211d1d2fe', '[[3, 4, -3, 4, 3, -4], [4, 4, -4, 3, 3, 5], [3, 3, 5, 1, 3, 2], [1, 3, 2, 0, 2, -2], [0, 2, -2, 0, 1, -1], [0, 1, -1, 1, 0, 4], [1, 0, 4, 2, 0, -1], [2, 0, -1, 3, 1, 5], [3, 1, 5, 3, 3, 5]]', '[[0, 1, -1], [0, 2, -2], [1, 0, 4], [1, 3, 2], [2, 0, -1], [3, 1, 5], [3, 3, 5], [3, 4, -3], [4, 3, -4], [4, 4, -4]]', '치킨미식회');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 8, 2, 1, 0, 0, 0, 2, '2023-08-17 15:26:08.043791', 4, 6, '2023-08-17 16:29:32.280819', '#3ed4be', '여행가서 즐긴 액티비티 ㄱㄱ', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692253566221.png?alt=media&token=9ec4ed6f-315b-4be3-a554-913d13960d61', '[[0, 2, 2, 2, 0, 2], [2, 0, 2, 4, 2, 4], [4, 2, 4, 2, 4, 3], [2, 4, 3, 0, 2, 2], [2, 0, 2, 4, 3, 3], [4, 2, 4, 1, 4, 2], [2, 4, 3, 0, 1, 3], [0, 2, 2, 3, 0, 4], [0, 1, 3, 4, 2, 4], [4, 3, 3, 0, 2, 2], [2, 0, 2, 1, 4, 2], [2, 4, 3, 3, 0, 4], [0, 1, 3, 2, 0, 2], [1, 4, 2, 0, 2, 2], [3, 0, 4, 4, 2, 4], [2, 4, 3, 4, 3, 3], [2, 0, 2, 3, 0, 4], [4, 2, 4, 4, 3, 3], [2, 4, 3, 1, 4, 2], [0, 2, 2, 0, 1, 3]]', '[[0, 1, 3], [0, 2, 2], [1, 4, 2], [2, 0, 2], [2, 4, 3], [3, 0, 4], [4, 2, 4], [4, 3, 3]]', '액티비티');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 5, 4, 0, 0, 0, 0, 3, '2023-08-17 15:33:07.166369', 6, 6, '2023-08-17 16:04:21.019864', '#0011ff', '진짜 바다가고싶은데
시간이 안난다ㄹㅇ
바다사진좀', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692253985464.png?alt=media&token=14850cad-045e-4fca-80cd-41625e33e041', '[[4, 1, -3, 3, 4, 1], [4, 2, -4, 3, 4, 1], [3, 0, 4, 3, 4, 1], [4, 2, -4, 2, 1, 4], [3, 4, 1, 2, 1, 4], [3, 0, 4, 2, 1, 4], [4, 1, -3, 3, 0, 4], [4, 2, -4, 3, 0, 4]]', '[[2, 1, 4], [3, 0, 4], [3, 4, 1], [4, 1, -3], [4, 2, -4]]', '바다');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 12, 4, 4, 0, 0, 0, 4, '2023-08-17 15:34:02.923457', 7, 5, '2023-08-17 15:57:04.891538', '#3ed4be', '본인의 서브웨이 꿀 조합을 공유해봅시다.', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254041943.png?alt=media&token=e637b92e-a48a-44c5-a58a-8c5e1ef82b5c', '[[0, 4, -1, 0, 3, 5], [0, 3, 5, 0, 2, 3], [0, 2, 3, 0, 1, -2], [0, 1, -2, 0, 0, -1], [0, 0, -1, 2, 0, -1], [2, 0, -1, 2, 2, -2], [2, 2, -2, 2, 3, -3], [2, 3, -3, 2, 4, 1], [2, 4, 1, 4, 4, 2], [4, 4, 2, 4, 2, 1], [4, 2, 1, 4, 0, 5]]', '[[0, 0, -1], [0, 1, -2], [0, 2, 3], [0, 3, 5], [0, 4, -1], [2, 0, -1], [2, 2, -2], [2, 3, -3], [2, 4, 1], [4, 0, 5], [4, 2, 1], [4, 4, 2]]', '서브웨이 꿀조합');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 9, 0, 0, 0, 0, 0, 5, '2023-08-17 15:35:43.721765', 8, 6, '2023-08-17 15:35:43.721765', '#33eb00', '꿈의 여행지
죽기전에 가보고싶은 장소', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254142301.png?alt=media&token=b01f560c-b605-461f-ade9-c535294f7bd2', '[[2, 0, 0, 0, 2, 0], [2, 0, 0, 4, 2, -3], [0, 2, 0, 2, 3, 5], [2, 3, 5, 1, 4, -4], [1, 4, -4, 3, 4, 1], [3, 4, 1, 2, 3, 5], [2, 3, 5, 4, 2, -3], [0, 2, 0, 4, 2, -3], [1, 1, 2, 3, 1, -3]]', '[[0, 2, 0], [1, 1, 2], [1, 4, -4], [2, 0, 0], [2, 1, -1], [2, 3, 5], [3, 1, -3], [3, 4, 1], [4, 2, -3]]', '버킷리스트');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 9, 0, 0, 0, 0, 0, 6, '2023-08-17 15:38:59.797683', 9, 6, '2023-08-17 15:38:59.797683', '#f94863', '가고싶은 곳이나
좋았던 곳 추천 ㄱㄱ', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254338107.png?alt=media&token=64df82bd-2a1f-416d-a888-cc1ee42a1135', '[[2, 1, 2, 1, 2, 4], [1, 2, 4, 2, 3, 4], [2, 3, 4, 3, 2, 1], [3, 2, 1, 2, 1, 2], [1, 1, 1, 2, 3, 4], [1, 3, -2, 3, 2, 1], [3, 3, -3, 2, 1, 2], [3, 1, -2, 1, 2, 4], [2, 2, 4, 2, 2, 4]]', '[[1, 1, 1], [1, 2, 4], [1, 3, -2], [2, 1, 2], [2, 2, 4], [2, 3, 4], [3, 1, -2], [3, 2, 1], [3, 3, -3]]', '일본 여행');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 8, 0, 0, 0, 0, 0, 7, '2023-08-17 15:41:46.857280', 11, 6, '2023-08-17 15:41:46.857280', '#d0fa00', '여름에 놀러갈 장소 공유', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254505429.png?alt=media&token=aac763d4-4c41-45e8-8471-ca07270ff8de', '[[0, 2, 2, 1, 3, -2], [1, 3, -2, 2, 4, 4], [0, 3, 4, 2, 4, 4], [1, 4, -4, 0, 2, 2], [0, 2, 2, 0, 3, 4], [1, 3, -2, 0, 3, 4], [1, 4, -4, 0, 3, 4], [1, 3, -2, 1, 4, -4], [2, 4, 4, 1, 4, -4], [0, 2, 2, 2, 4, 4], [0, 2, 2, 0, 4, 2], [1, 3, -2, 0, 4, 2], [2, 4, 4, 0, 4, 2], [1, 4, -4, 0, 4, 2], [0, 3, 4, 0, 4, 2], [1, 2, -4, 0, 4, 2], [2, 3, -3, 0, 4, 2]]', '[[0, 2, 2], [0, 3, 4], [0, 4, 2], [1, 2, -4], [1, 3, -2], [1, 4, -4], [2, 3, -3], [2, 4, 4]]', '여름 휴가');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 7, 2, 0, 0, 0, 0, 8, '2023-08-17 15:45:59.221589', 13, 6, '2023-08-17 16:12:42.680472', '#15b800', '숲이 내뿜는 청량감ㅇㅇ
정상에서 내려다보는 기분', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254757338.png?alt=media&token=6d999d79-9312-4b2e-b406-3d8648234653', '[[3, 0, 0, 0, 1, -2], [3, 1, -1, 1, 3, -1], [3, 3, -2, 0, 1, -2], [3, 4, 2, 1, 3, -1], [2, 4, 5, 3, 3, -2], [3, 4, 2, 2, 4, 5]]', '[[0, 1, -2], [1, 3, -1], [2, 4, 5], [3, 0, 0], [3, 1, -1], [3, 3, -2], [3, 4, 2]]', '산');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 12, 0, 0, 0, 0, 0, 9, '2023-08-17 15:48:55.110140', 17, 6, '2023-08-17 15:48:55.110140', '#3fd5d2', '진짜 찐맛집만 올리자', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692254933592.png?alt=media&token=e79ace6e-1f1e-4234-8089-3776f6f173c8', '[[0, 1, -1, 2, 1, 2], [0, 1, -1, 2, 2, 0], [2, 2, 0, 0, 3, -3], [0, 3, -3, 2, 3, 1], [2, 1, 2, 3, 1, -1], [3, 1, -1, 4, 2, -3], [4, 2, -3, 3, 3, -2], [3, 3, -2, 2, 3, 1], [3, 3, -2, 2, 4, -3], [3, 3, -2, 3, 4, -2], [3, 1, -1, 2, 0, -4], [3, 1, -1, 3, 0, 4]]', '[[0, 1, -1], [0, 3, -3], [2, 0, -4], [2, 1, 2], [2, 2, 0], [2, 3, 1], [2, 4, -3], [3, 0, 4], [3, 1, -1], [3, 3, -2], [3, 4, -2], [4, 2, -3]]', '여행 음식');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 11, 4, 0, 0, 0, 0, 10, '2023-08-17 15:51:22.777393', 22, 1, '2023-08-17 16:12:02.970044', '#ffee2e', '포켓몬 유나이트 게임 함께 해요', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692255082406.png?alt=media&token=1e382cf4-8374-4c4f-9262-9f50614331a0', '[[2, 1, 4, 0, 0, -4], [0, 0, -4, 2, 2, -2], [2, 2, -2, 0, 4, -4], [0, 4, -4, 2, 3, -4], [2, 1, 4, 3, 1, 5], [3, 1, 5, 3, 3, 4], [3, 3, 4, 2, 3, -4], [3, 1, 5, 4, 1, 5], [4, 1, 5, 4, 3, -2], [4, 3, -2, 3, 3, 4], [4, 3, -2, 3, 4, 3], [3, 4, 3, 2, 4, 1]]', '[[0, 0, -4], [0, 4, -4], [2, 1, 4], [2, 2, -2], [2, 3, -4], [2, 4, 1], [3, 1, 5], [3, 3, 4], [3, 4, 3], [4, 1, 5], [4, 3, -2]]', '포켓몬 유나이트');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 6, 0, 0, 0, 0, 0, 11, '2023-08-17 15:51:30.757332', 18, 6, '2023-08-17 15:51:30.757332', '#3ed4be', '바쁜 현대인을 위한
당일치기 여행
하루동안 죽어보자', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692255089081.png?alt=media&token=09aa2d4f-8172-4698-9b1b-7ed5dfa17c8a', '[[3, 0, 2, 4, 1, 5], [3, 0, 2, 2, 1, 0], [2, 1, 0, 3, 2, 2], [3, 2, 2, 4, 1, 5], [3, 2, 2, 1, 3, -3], [1, 3, -3, 1, 4, 0]]', '[[1, 3, -3], [1, 4, 0], [2, 1, 0], [3, 0, 2], [3, 2, 2], [4, 1, 5]]', '당일치기');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 20, 5, 0, 0, 0, 0, 12, '2023-08-17 15:54:32.463467', 5, 5, '2023-08-17 16:08:45.637823', '#3ed4be', '강남 음식 맛집 추천해주고 정보공유해요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692255271471.png?alt=media&token=6f92a714-2498-4135-adba-d6dbe62491f7', '[[0, 0, -3, 0, 1, -1], [0, 2, -1, 1, 2, 3], [2, 2, 2, 2, 1, 4], [2, 0, 2, 3, 0, 2], [4, 0, 3, 4, 1, 4], [4, 2, 3, 3, 2, -1], [4, 3, 2, 3, 3, -2], [3, 4, -3, 2, 4, 3], [1, 3, -4, 1, 4, 4], [0, 3, 1, 0, 4, 3]]', '[[0, 0, -3], [0, 1, -1], [0, 2, -1], [0, 3, 1], [0, 4, 3], [1, 2, 3], [1, 3, -4], [1, 4, 4], [2, 0, 2], [2, 1, 4], [2, 2, 2], [2, 4, 3], [3, 0, 2], [3, 2, -1], [3, 3, -2], [3, 4, -3], [4, 0, 3], [4, 1, 4], [4, 2, 3], [4, 3, 2]]', '강남맛집');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 8, 5, 0, 0, 0, 0, 13, '2023-08-17 15:58:43.559084', 5, 5, '2023-08-17 16:12:19.406562', '#3ed4be', '혼밥하시는 분들 좋은 메뉴 공유합시다 흑흑', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692255522357.png?alt=media&token=3f27e910-a909-4310-8f42-abd308ec11dc', '[[0, 0, -2, 0, 1, 5], [0, 3, 1, 0, 4, 4], [0, 1, 5, 0, 3, 1], [0, 3, 1, 2, 3, 4], [0, 1, 5, 2, 1, 5], [2, 1, 5, 4, 1, -3], [4, 3, 0, 2, 3, 4]]', '[[0, 0, -2], [0, 1, 5], [0, 3, 1], [0, 4, 4], [2, 1, 5], [2, 3, 4], [4, 1, -3], [4, 3, 0]]', '혼밥족 메뉴추천');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 9, 1, 0, 0, 0, 0, 14, '2023-08-17 16:13:30.060371', 1, 5, '2023-08-17 16:16:32.411329', '#3ed4be', '본인만의 레시피를 공유해보아요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692256409059.png?alt=media&token=0a3843d4-e21f-49ab-81fc-2d7220d6f618', '[[1, 0, 2, 0, 1, -4], [1, 2, 3, 0, 1, -4], [1, 2, 3, 0, 3, -1], [0, 3, -1, 1, 4, -4], [3, 0, 1, 4, 1, 4], [4, 1, 4, 4, 3, -1], [4, 3, -1, 3, 4, 0]]', '[[0, 1, -4], [0, 3, -1], [1, 0, 2], [1, 2, 3], [1, 4, -4], [3, 0, 1], [3, 4, 0], [4, 1, 4], [4, 3, -1]]', '가정식 레시피');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 8, 0, 0, 0, 0, 0, 15, '2023-08-17 16:17:42.698149', 22, 1, '2023-08-17 16:17:42.698149', '#4069e2', '좋아하는 캐릭터를 그려봐요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692256662144.png?alt=media&token=f2af33a8-6fef-47fc-aa0f-deb02747b90f', '[[1, 1, 4, 3, 0, -3], [3, 0, -3, 4, 1, -1], [1, 1, 4, 0, 3, 0], [0, 3, 0, 3, 3, -1], [4, 1, -1, 2, 2, -2], [3, 3, -1, 2, 4, -1], [2, 4, -1, 4, 3, -4]]', '[[0, 3, 0], [1, 1, 4], [2, 2, -2], [2, 4, -1], [3, 0, -3], [3, 3, -1], [4, 1, -1], [4, 3, -4]]', '캐릭터 그리기');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 12, 0, 0, 0, 0, 0, 16, '2023-08-17 16:41:46.671259', 20, 5, '2023-08-17 16:41:46.671259', '#3ed4be', '족발 러버들의 모임', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692258104215.png?alt=media&token=c6c200fe-ea3d-4db0-a633-439df449e863', '[[0, 0, -4, 0, 2, 4], [0, 2, 4, 0, 4, -4], [0, 2, 4, 1, 0, 1], [0, 2, 4, 1, 4, -1], [1, 2, 1, 2, 2, 2], [2, 0, -4, 2, 2, 2], [2, 2, 2, 2, 4, 4], [3, 1, 2, 3, 3, 4], [3, 3, 4, 4, 3, -1]]', '[[0, 0, -4], [0, 2, 4], [0, 4, -4], [1, 0, 1], [1, 2, 1], [1, 4, -1], [2, 0, -4], [2, 2, 2], [2, 4, 4], [3, 1, 2], [3, 3, 4], [4, 3, -1]]', '족발');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 9, 4, 11, 0, 0, 0, 17, '2023-08-17 16:48:22.026854', 20, 5, '2023-08-17 17:04:38.984829', '#3ed4be', '치킨치킨치킨', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692258500553.png?alt=media&token=a1d09c11-0919-44d3-927f-4c1c9a9ffaf1', '[[0, 1, 1, 1, 1, -3], [1, 0, 5, 1, 1, -3], [1, 1, -3, 1, 2, 4], [1, 1, -3, 3, 0, 5], [1, 1, -3, 3, 2, 2], [0, 3, -3, 2, 3, -1], [2, 3, -1, 4, 3, -3]]', '[[0, 1, 1], [0, 3, -3], [1, 0, 5], [1, 1, -3], [1, 2, 4], [2, 3, -1], [3, 0, 5], [3, 2, 2], [4, 3, -3]]', '치킨');
INSERT INTO constellation (board_size, point_count, star_count, total_brightness, x, y, z, constellation_id, created_at, member_id, planet_id, updated_at, color, description, image_url, line_list, point_list, title) VALUES (5, 8, 0, 0, 0, 0, 0, 18, '2023-08-17 17:43:19.577863', 26, 7, '2023-08-17 17:43:19.577863', '#3ed4be', '별별 이야길 다하는 별자리 입니당', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1692261798601.png?alt=media&token=0b64ceef-9af8-4fa0-b61e-7f20aa60040f', '[[1, 1, 4, 1, 1, 4], [2, 2, -4, 2, 1, 0], [3, 2, 3, 3, 3, 2], [2, 3, -3, 1, 3, 1]]', '[[1, 1, 4], [1, 2, 5], [1, 3, 1], [2, 1, 0], [2, 2, -4], [2, 3, -3], [3, 2, 3], [3, 3, 2]]', '별별');


create table pin
(
    constellation_id bigint not null,
    member_id        bigint not null,
    primary key (constellation_id, member_id),
    constraint FK8po36c66d4aq04lrmnc4immmf
        foreign key (member_id) references member (member_id),
    constraint FKk54sd5obacpqxt20kj73vwuoi
        foreign key (constellation_id) references constellation (constellation_id)
);

INSERT INTO pin (constellation_id, member_id) VALUES (17, 1);
INSERT INTO pin (constellation_id, member_id) VALUES (17, 22);


create table star
(
    brightness       int          default 0                                                                                                                                                                                                                                   not null,
    constellation_id bigint                                                                                                                                                                                                                                                   null,
    created_at       datetime(6)                                                                                                                                                                                                                                              null,
    member_id        bigint                                                                                                                                                                                                                                                   null,
    star_id          bigint auto_increment
        primary key,
    updated_at       datetime(6)                                                                                                                                                                                                                                              null,
    content          text                                                                                                                                                                                                                                                     not null,
    image_url        varchar(255) default 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.blog.naver.com%2Fsbkim24%2F221186610409&psig=AOvVaw17ZT087qblje4zlC7CccXl&ust=1691049058729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjvjOa-vYADFQAAAAAdAAAAABAI' null,
    title            varchar(255)                                                                                                                                                                                                                                             not null,
    constraint FKdgobx61e1j2ivr1p70nlrqp43
        foreign key (constellation_id) references constellation (constellation_id),
    constraint FKppukvq3nd68siyltdnbj7l7fr
        foreign key (member_id) references member (member_id)
);

INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (2, 1, '2023-08-17 15:24:20.853294', 1, 1, '2023-08-17 16:56:53.420323', '황금올리브가 최고죠! 다른 치킨 왜  먹음?', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=8e4057ae-4348-4fbc-bd44-0e97701fe55b', 'bbq 황올');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (2, 1, '2023-08-17 15:32:29.053918', 7, 2, '2023-08-17 15:38:59.892391', 'bbq에서 황금올리브도 맛있지만 자메이카 통다리 구이가 더 맛있어요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=a7c4c95b-983d-4a3d-bf06-47beca5adf98', '자메이카 통다리');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (1, 4, '2023-08-17 15:34:54.077958', 7, 3, '2023-08-17 15:42:03.217911', '유튜버 김계란이 추천한 조합입니다. 다들 시도해보세요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=135e5836-2c64-4b4b-b848-09fa05d03b47', '김계란 추천 조합');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (1, 1, '2023-08-17 15:36:40.826863', 2, 4, '2023-08-17 15:41:10.761629', '뿌링클 뿌링클 맛있게~', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=b0e3ceb6-a074-4cdf-b2e6-af4e238a7f96', '뿌링클!');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 1, '2023-08-17 15:38:52.168979', 3, 5, '2023-08-17 15:38:52.168979', '넘 맛잇어용 ㅎㅎ 강추합니다!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=aae67e05-6c69-4a28-b977-546f7be086fb', '교촌 허니콤보!');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (1, 1, '2023-08-17 15:41:00.904019', 12, 6, '2023-08-17 16:02:47.456206', '아무튼 그런것임! 다들 지코바 많이많이 드세요', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled.png?alt=media&token=9bac14a1-129b-48e3-aa2f-e21383686fcc', '지코바 밥도둑임');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (2, 4, '2023-08-17 15:41:58.552565', 12, 7, '2023-08-17 15:57:04.891302', '이 3개 돌아가면서 먹으면 실패는 안함! 강추', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(1).png?alt=media&token=5da4439d-0ef3-42e9-b6e8-ca58f605feaf', '국룰조합 3개임');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (1, 4, '2023-08-17 15:44:30.762232', 14, 8, '2023-08-17 15:48:46.892039', '현직자 피셜이 가장 신빙성 있어요. 이게 답입니다. 저를 믿으셔야합니다. 슉 슈슉 슉 슉 슈슉', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(2).png?alt=media&token=a4c59630-d408-49ee-868b-9c5412e52194', '알바생의 꿀조합');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 4, '2023-08-17 15:45:27.679920', 16, 9, '2023-08-17 15:45:27.679920', '그런데 이제 에그마요를 곁들인...', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(3).png?alt=media&token=2bc2fa91-7dd1-45d0-8a46-e6d7a32c57db', '스테이크치즈!');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 12, '2023-08-17 15:56:34.939911', 5, 10, '2023-08-17 15:56:34.939911', '마라전골이 아주 맛있어요. 그런데 6시만 지나도 항상 웨이팅이 길어서 일찍 가셔야 합니다..!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(5).png?alt=media&token=6c052fea-b6cc-4196-9367-f29c3b6299b2', '용용선생');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 3, '2023-08-17 15:58:51.073869', 4, 11, '2023-08-17 15:58:51.073869', '바다아닌 바다같은 강', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F3472487476231591233_20220927210158054.JPG.jpg?alt=media&token=07174acc-0dc7-4ceb-93e9-1294c7dfdede', '요즘따라 바다인듯');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 13, '2023-08-17 15:59:44.937314', 5, 12, '2023-08-17 15:59:44.937314', '한끼 뚝딱입니다. 갓성비 인정합니다.', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(7).png?alt=media&token=3869e083-6f34-4671-9294-cc82f894d581', '중국집 볶음밥');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 13, '2023-08-17 16:01:34.374836', 6, 13, '2023-08-17 16:01:34.374836', '다 드루와! 겁나 맛있다!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(8).png?alt=media&token=68e51435-0eeb-4aa4-bd51-4f8e6cf39a14', '싸움의 고수');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 3, '2023-08-17 16:01:38.261532', 11, 14, '2023-08-17 16:01:38.261532', '까딸루냐 huh', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F3472487475276729409_20220927210156020.JPG.jpg?alt=media&token=b84a30cc-3470-4088-85dc-48d2688e868e', '바르셀로나');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 3, '2023-08-17 16:02:34.593674', 9, 15, '2023-08-17 16:02:34.593674', '놀러갔읍니다.. ^^*', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FIMG_1113.jpg?alt=media&token=286a05d2-fb83-46ad-98ad-c23facd40922', '강릉');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 10, '2023-08-17 16:03:54.128036', 22, 16, '2023-08-17 16:03:54.128036', '제가 좋아하는 포켓몬은 님피아입니다!! 예전에는 하보랑 버프를 썼었는데 지금은 매지컬 플레임이랑 드레인 키스 조합으로 바꿨어요. 스피드형이 많아져서...ㅎㅎ 같이 즐겜해요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fnnnnnnn.png?alt=media&token=3832c2d2-7783-438c-91a9-d82454982da3', '님피아 좋아요');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 3, '2023-08-17 16:04:21.004109', 6, 17, '2023-08-17 16:04:21.004109', '진짜 잘찍은듯', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FIMG_1742.jpg?alt=media&token=350be14e-461e-496d-ad95-f37e58f7bdce', '인생샷 공유함ㅇㅇ');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 12, '2023-08-17 16:04:30.400356', 6, 18, '2023-08-17 16:04:30.400356', '이거... 못 막습니다! 너무 맛있어요! 비상!!!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(9).png?alt=media&token=432ed929-4291-4d22-be92-ffa289a4f46e', '고기꾼 김춘배');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 12, '2023-08-17 16:06:34.321641', 18, 19, '2023-08-17 16:06:34.321641', '여기 정말 몹시 매우 감동적이게 맛있어요 흑흑', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(10).png?alt=media&token=b309cfd0-acb0-41de-8113-c383fb6711bd', '세광양대창');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (1, 2, '2023-08-17 16:06:41.720753', 19, 20, '2023-08-17 16:14:38.889699', '스카이다이빙했었음', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F3472487495527939648_20220927210152246.JPG.jpg?alt=media&token=96c755dd-6bc8-4347-82f8-dd1493d00228', '인생최대업적');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 10, '2023-08-17 16:06:44.030557', 22, 21, '2023-08-17 16:06:44.030557', '원래 님피아 썼었는데 에브이가 요즘은 또 좋더라고요. 예전에는 사이코 쇼크 썼었는데 요즘은 어시스트 파워로 10만딜 넘게 넣어요. 다들 에브이로 행복 유나이트 하세요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Feeee.png?alt=media&token=10a5b987-bb1a-458b-8ab6-5dd094c69cb8', '에브이 진짜 좋아요');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 12, '2023-08-17 16:07:40.000636', 7, 22, '2023-08-17 16:07:40.000636', '여기 파스타, 스테이크 맛있어요. 소개팅할 때 강추합니다!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(11).png?alt=media&token=1e7c403b-4d1a-4da4-8a05-7218dce95fb7', '바비레드');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 12, '2023-08-17 16:08:45.626812', 4, 23, '2023-08-17 16:08:45.626812', '갓뎀! 너무맛잇어요', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(12).png?alt=media&token=1445f7ba-55bb-43a8-8e70-5523d31c4641', '갓덴스시');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 10, '2023-08-17 16:09:10.822042', 22, 24, '2023-08-17 16:09:10.822042', '블래키가 디펜스형으로 출시됐는데 당시에 딜러인줄 알았어요... 지금은 너프돼서 정말 다행이에요. 너프 먹기 전에 잠깐 썼는데 9만딜 들어갔어요 ㅋㅋ 이게 디펜스형??!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fbbb.png?alt=media&token=36e3d508-768c-4c2e-ab62-6388e5c1847a', '블래키');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 13, '2023-08-17 16:10:15.759096', 20, 25, '2023-08-17 16:10:15.759096', '혼밥하기 적당한 가격, 맛입니다. 강추해요!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(13).png?alt=media&token=5d4b6822-3add-4f56-b2a1-ff82fee676a7', '밀플랜비');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 8, '2023-08-17 16:10:37.583309', 13, 26, '2023-08-17 16:10:37.583309', '벌써 일년지남 ㄷㄷ;
스위스 안가본사람 있으면 ㄹㅇ 꼭 가보세요 진짜 개좋음', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F3472487475605969985_20220927210156777.JPG.jpg?alt=media&token=09950d66-9004-4d88-a951-c811cd0beb66', '알프스 산맥');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 13, '2023-08-17 16:11:07.962814', 2, 27, '2023-08-17 16:11:07.962814', '너무 수치스럽다 정말..', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(14).png?alt=media&token=ab25f676-77ab-4522-86a0-f88f838180fa', '혼밥이 죄냐..');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 10, '2023-08-17 16:12:02.958861', 22, 28, '2023-08-17 16:12:02.958861', '제가 이브이즈 중에 제일 처음 쓴 포켓몬이 글레이시아에요! 글레이시아 얼음뭉치+고드름침 조합으로 썼었어요. 타겟팅으로 높은 딜을 넣을 수 있어서 좋아요! 그런데 방어력이 약해요..', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fggg.png?alt=media&token=c7810bed-a5b7-47bb-b128-fbbc35985313', '글레이시아');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 13, '2023-08-17 16:12:19.395405', 10, 29, '2023-08-17 16:12:19.395405', '혼밥하면 라면이죠.. 하지만 라면만 먹다보면 질리지 않나요? 그런 당신에게 권합니다. 라멘!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(15).png?alt=media&token=b2d85eba-934a-42b2-b932-902b2b468805', '라멘');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 8, '2023-08-17 16:12:42.669606', 17, 30, '2023-08-17 16:12:42.669606', '몬세라트ㅇㅇ 진짜 뷰 맛집임', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F3472487475025012032_20220927210155423.JPG.jpg?alt=media&token=d6a59161-2d5a-4571-9187-1fcd7e9db08f', '바르셀로나 ');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 14, '2023-08-17 16:16:32.400043', 1, 31, '2023-08-17 16:16:32.400043', '1. 후라이팬에 기름을 둘러준다.
2. 대파를 넣어 파기름을 내준다.
3. 대파 향이 나기 시작하면 계란을 넣어준다.
4. 계란을 주걱으로 으깨준다.
5. 계란이 익으면 쌀밥 투하', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2FUntitled%20(16).png?alt=media&token=e7820686-b03b-4b08-bcfb-116e35f3d27b', '간장계란밥');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 2, '2023-08-17 16:29:32.269069', 17, 32, '2023-08-17 16:29:32.269069', '여자친구랑 같이갔는데 좋음
2명에 25000원ㅇㅇ 정동진 레일바이크 검색하면됩니당', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F1648346194959.jpg?alt=media&token=9df15f79-9075-4db1-b788-2befb31a2775', '강원도 레일바이크');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (11, 17, '2023-08-17 16:50:09.389235', 1, 33, '2023-08-17 16:55:41.570609', '항상 옳아요', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fdddddd.jfif?alt=media&token=79dc03f0-6a10-4178-8c72-9ee56d9fdafb', '치킨은 옳아요');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 17, '2023-08-17 16:50:10.923708', 20, 34, '2023-08-17 16:50:10.923708', '지인이 치킨선물해줬어요 케케케', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fbbq.png?alt=media&token=b2260fe7-51e4-4b8b-9084-08742d404bd1', '치킨 잘먹겠습니다');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 17, '2023-08-17 16:51:01.425520', 22, 35, '2023-08-17 16:51:01.425520', '너무 맛있어 보여요. 알려주세요.
 츄르릅...!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F%EC%B9%98%ED%82%A8.jpg?alt=media&token=3b8659dd-b35b-4508-b366-3901f3ab4a91', '이게 무슨 치킨이죠');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 17, '2023-08-17 17:04:38.974112', 1, 36, '2023-08-17 17:04:38.974112', '치킨 먹을까요?!!', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/Zordiac%2Fearth.png?alt=media&token=0ecc42f5-7022-4197-827b-751ecb92c983', '치킨먹어야 하나요?');
INSERT INTO star (brightness, constellation_id, created_at, member_id, star_id, updated_at, content, image_url, title) VALUES (0, 1, '2023-08-17 17:08:43.771982', 25, 37, '2023-08-17 17:08:43.771982', '윙크루피', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2F111.jfif?alt=media&token=5b776098-b305-42a8-9609-ea8ac673c0d0', '루피');


create table brightness
(
    member_id bigint not null,
    star_id   bigint not null,
    primary key (member_id, star_id),
    constraint FK68vqtkcts5t6k329ulgy7ue99
        foreign key (member_id) references member (member_id),
    constraint FKf43emtjw0xi9qsph9k53ycnuc
        foreign key (star_id) references star (star_id)
);

INSERT INTO brightness (member_id, star_id) VALUES (1, 33);
INSERT INTO brightness (member_id, star_id) VALUES (2, 2);
INSERT INTO brightness (member_id, star_id) VALUES (2, 33);
INSERT INTO brightness (member_id, star_id) VALUES (3, 2);
INSERT INTO brightness (member_id, star_id) VALUES (4, 33);
INSERT INTO brightness (member_id, star_id) VALUES (5, 7);
INSERT INTO brightness (member_id, star_id) VALUES (6, 33);
INSERT INTO brightness (member_id, star_id) VALUES (7, 1);
INSERT INTO brightness (member_id, star_id) VALUES (10, 33);
INSERT INTO brightness (member_id, star_id) VALUES (12, 3);
INSERT INTO brightness (member_id, star_id) VALUES (12, 4);
INSERT INTO brightness (member_id, star_id) VALUES (14, 33);
INSERT INTO brightness (member_id, star_id) VALUES (15, 6);
INSERT INTO brightness (member_id, star_id) VALUES (15, 33);
INSERT INTO brightness (member_id, star_id) VALUES (16, 7);
INSERT INTO brightness (member_id, star_id) VALUES (16, 8);
INSERT INTO brightness (member_id, star_id) VALUES (18, 33);
INSERT INTO brightness (member_id, star_id) VALUES (20, 1);
INSERT INTO brightness (member_id, star_id) VALUES (20, 33);
INSERT INTO brightness (member_id, star_id) VALUES (22, 20);
INSERT INTO brightness (member_id, star_id) VALUES (22, 33);
INSERT INTO brightness (member_id, star_id) VALUES (24, 33);


create table comment
(
    comment_id bigint auto_increment
        primary key,
    created_at datetime(6)  null,
    member_id  bigint       null,
    star_id    bigint       null,
    updated_at datetime(6)  null,
    content    varchar(255) not null,
    constraint FKm7fk27bkb4e9du51it2skuxhb
        foreign key (star_id) references star (star_id),
    constraint FKmrrrpi513ssu63i2783jyiv9m
        foreign key (member_id) references member (member_id)
);

INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (1, '2023-08-17 15:32:57.420484', 7, 1, '2023-08-17 15:32:57.420484', '황금올리브도 맛있지만 자메이카 통다리 구이가 더 맛있는듯??');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (2, '2023-08-17 15:36:54.363320', 2, 2, '2023-08-17 15:36:54.363320', '자메이카 통다리 맛잇죠 ㅎㅎ');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (3, '2023-08-17 15:39:08.244250', 3, 2, '2023-08-17 15:39:08.244250', '허니콤보 한입 하실래여?');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (4, '2023-08-17 15:42:08.751015', 12, 3, '2023-08-17 15:42:08.751015', '건강해보이네;;');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (5, '2023-08-17 15:45:56.419879', 16, 7, '2023-08-17 15:45:56.419879', '비엘티 저렇게 먹어봤는데 괜찮은듯!');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (6, '2023-08-17 15:48:54.623032', 16, 8, '2023-08-17 15:48:54.623032', '슉 슈슉 슉 슉 슈슉');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (7, '2023-08-17 15:57:25.188932', 5, 7, '2023-08-17 15:57:25.188932', '좋은 정보 감사합니당 ^0^');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (8, '2023-08-17 16:02:54.471593', 15, 6, '2023-08-17 16:02:54.471593', '지코바? 체인인가요?');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (9, '2023-08-17 16:07:55.628055', 7, 18, '2023-08-17 16:07:55.628055', '버섯에 글자가 적혀있네요!');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (10, '2023-08-17 16:14:36.943764', 22, 20, '2023-08-17 16:14:36.943764', '오 나도 언젠가 해보고싶다');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (11, '2023-08-17 16:40:07.729517', 22, 26, '2023-08-17 16:40:07.729517', '오 굿굿!!');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (12, '2023-08-17 16:51:01.685566', 20, 33, '2023-08-17 16:51:01.685566', '오오 저도 지금 치킨 먹으려고 하는데 맛있게 드세용ㅎㅎ');
INSERT INTO comment (comment_id, created_at, member_id, star_id, updated_at, content) VALUES (13, '2023-08-17 16:56:50.173657', 20, 1, '2023-08-17 16:56:50.173657', '왜 이렇게 맛있어보여요!!');



create table template
(
    board_size  int          default 10    not null,
    point_count int          default 0     not null,
    created_at  datetime(6)                null,
    template_id bigint auto_increment
        primary key,
    updated_at  datetime(6)                null,
    image_url   varchar(255)               not null,
    line_list   varchar(255) default '[]'  null,
    point_list  varchar(255) default '[]'  null,
    title       varchar(255) default '행성명' null
);

INSERT INTO template (board_size, point_count, created_at, template_id, updated_at, image_url, line_list, point_list, title) VALUES (5, 10, '2023-08-14 12:50:49.000000', 1, '2023-08-14 12:50:52.000000', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1691986048152.png?alt=media&token=77a460e4-c1b4-47cd-936e-5b5af71925da', '[[2, 1, 0, 1], [0, 1, 1, 2], [1, 2, 0, 3], [0, 3, 2, 3], [2, 1, 2, 3], [2, 1, 4, 1], [2, 3, 4, 3], [2, 1, 4, 0], [4, 0, 4, 4], [2, 3, 4, 4]]', '[[0, 1], [0, 3], [1, 2], [2, 1], [2, 3], [4, 0], [4, 1], [4, 3], [4, 4]]', '고양이');
INSERT INTO template (board_size, point_count, created_at, template_id, updated_at, image_url, line_list, point_list, title) VALUES (5, 11, '2023-08-14 13:03:59.000000', 2, '2023-08-14 13:04:00.000000', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1691985432459.png?alt=media&token=e81319ee-c4ca-4522-8a61-8b32802ab57b', '[[0,1,2,1],[0,1,2,2],[2,2,0,3],[0,3,2,3],[2,1,3,1],[3,1,4,2],[4,2,3,3],[3,3,2,3],[3,3,2,4],[3,3,3,4],[3,1,2,0],[3,1,3,0]]', '[[0, 1], [0, 3], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [3, 1], [3, 3], [3, 4], [4, 2]]', '여우');
INSERT INTO template (board_size, point_count, created_at, template_id, updated_at, image_url, line_list, point_list, title) VALUES (5, 8, '2023-08-14 13:20:52.000000', 3, '2023-08-14 13:20:23.000000', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1691986738219.png?alt=media&token=ce66a216-5563-487a-a27e-613b0a1ad2b5', '[[2, 0, 0, 2], [2, 0, 4, 2], [0, 2, 2, 3], [2, 3, 1, 4], [1, 4, 3, 4], [3, 4, 2, 3], [2, 3, 4, 2], [0, 2, 4, 2], [1, 1, 3, 1]]', '[[0, 2], [1, 1], [1, 4], [2, 0], [2, 1], [2, 3], [3, 1], [3, 4], [4, 2]]', '물고기');
INSERT INTO template (board_size, point_count, created_at, template_id, updated_at, image_url, line_list, point_list, title) VALUES (5, 9, '2023-08-14 13:29:47.000000', 4, '2023-08-14 13:29:22.000000', 'https://firebasestorage.googleapis.com/v0/b/uni-birth.appspot.com/o/images%2Fconstellation-1691987277397.png?alt=media&token=c652a4d8-cfc6-45c9-945d-e60517c3b64b', '[[2, 2, 0, 1], [0, 1, 2, 1], [2, 1, 2, 3], [2, 3, 0, 3], [0, 3, 1, 1], [2, 2, 4, 2], [4, 2, 3, 0], [4, 2, 3, 4], [2, 2, 0, 3], [0, 1, 1, 3]]', '[[0, 1], [0, 3], [1, 1], [1, 3], [2, 1], [2, 2], [2, 3], [3, 0], [3, 4], [4, 2]]', '튤립');




