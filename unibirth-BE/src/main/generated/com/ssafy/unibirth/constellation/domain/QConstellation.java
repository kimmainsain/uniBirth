package com.ssafy.unibirth.constellation.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QConstellation is a Querydsl query type for Constellation
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QConstellation extends EntityPathBase<Constellation> {

    private static final long serialVersionUID = 1501434940L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QConstellation constellation = new QConstellation("constellation");

    public final com.ssafy.unibirth.common.domain.util.QBaseTimeEntity _super = new com.ssafy.unibirth.common.domain.util.QBaseTimeEntity(this);

    public final NumberPath<Integer> boardSize = createNumber("boardSize", Integer.class);

    public final StringPath color = createString("color");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imageUrl = createString("imageUrl");

    public final StringPath lineList = createString("lineList");

    public final com.ssafy.unibirth.member.domain.QMember member;

    public final com.ssafy.unibirth.planet.domain.QPlanet planet;

    public final NumberPath<Integer> pointCount = createNumber("pointCount", Integer.class);

    public final StringPath pointList = createString("pointList");

    public final NumberPath<Integer> starCount = createNumber("starCount", Integer.class);

    public final ListPath<com.ssafy.unibirth.star.domain.Star, com.ssafy.unibirth.star.domain.QStar> starList = this.<com.ssafy.unibirth.star.domain.Star, com.ssafy.unibirth.star.domain.QStar>createList("starList", com.ssafy.unibirth.star.domain.Star.class, com.ssafy.unibirth.star.domain.QStar.class, PathInits.DIRECT2);

    public final StringPath title = createString("title");

    public final NumberPath<Integer> totalBrightness = createNumber("totalBrightness", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public final NumberPath<Double> x = createNumber("x", Double.class);

    public final NumberPath<Double> y = createNumber("y", Double.class);

    public final NumberPath<Double> z = createNumber("z", Double.class);

    public QConstellation(String variable) {
        this(Constellation.class, forVariable(variable), INITS);
    }

    public QConstellation(Path<? extends Constellation> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QConstellation(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QConstellation(PathMetadata metadata, PathInits inits) {
        this(Constellation.class, metadata, inits);
    }

    public QConstellation(Class<? extends Constellation> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.member = inits.isInitialized("member") ? new com.ssafy.unibirth.member.domain.QMember(forProperty("member")) : null;
        this.planet = inits.isInitialized("planet") ? new com.ssafy.unibirth.planet.domain.QPlanet(forProperty("planet")) : null;
    }

}

