package com.ssafy.unibirth.star.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QBrightness is a Querydsl query type for Brightness
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBrightness extends EntityPathBase<Brightness> {

    private static final long serialVersionUID = -256833481L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QBrightness brightness = new QBrightness("brightness");

    public final QBrightnessId id;

    public final com.ssafy.unibirth.member.domain.QMember member;

    public final QStar star;

    public QBrightness(String variable) {
        this(Brightness.class, forVariable(variable), INITS);
    }

    public QBrightness(Path<? extends Brightness> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QBrightness(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QBrightness(PathMetadata metadata, PathInits inits) {
        this(Brightness.class, metadata, inits);
    }

    public QBrightness(Class<? extends Brightness> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.id = inits.isInitialized("id") ? new QBrightnessId(forProperty("id")) : null;
        this.member = inits.isInitialized("member") ? new com.ssafy.unibirth.member.domain.QMember(forProperty("member")) : null;
        this.star = inits.isInitialized("star") ? new QStar(forProperty("star"), inits.get("star")) : null;
    }

}

