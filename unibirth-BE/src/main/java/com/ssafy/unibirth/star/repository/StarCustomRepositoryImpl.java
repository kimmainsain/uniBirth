package com.ssafy.unibirth.star.repository;

import static com.ssafy.unibirth.star.domain.QStar.star;
import static com.ssafy.unibirth.member.domain.QMember.member;
import static com.ssafy.unibirth.constellation.domain.QConstellation.constellation;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.unibirth.star.domain.Star;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class StarCustomRepositoryImpl implements StarCustomRepository{
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<Tuple> findTopStarListByPlanetId(Long planetId) {
        return jpaQueryFactory
                .select(star.id, star.brightness, star.imageUrl, member.nickname)
                .from(star)
                .join(star.constellation, constellation)
                .leftJoin(star.member, member)
                .where(constellation.planet.id.eq(planetId))
                .orderBy(star.brightness.desc())
                .limit(3)
                .fetch();
    }
}
