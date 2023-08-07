package com.ssafy.unibirth.constellation.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPin is a Querydsl query type for Pin
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPin extends EntityPathBase<Pin> {

    private static final long serialVersionUID = 1936625470L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPin pin = new QPin("pin");

    public final QConstellation constellation;

    public final QPinId id;

    public final com.ssafy.unibirth.member.domain.QMember member;

    public QPin(String variable) {
        this(Pin.class, forVariable(variable), INITS);
    }

    public QPin(Path<? extends Pin> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPin(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPin(PathMetadata metadata, PathInits inits) {
        this(Pin.class, metadata, inits);
    }

    public QPin(Class<? extends Pin> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.constellation = inits.isInitialized("constellation") ? new QConstellation(forProperty("constellation"), inits.get("constellation")) : null;
        this.id = inits.isInitialized("id") ? new QPinId(forProperty("id")) : null;
        this.member = inits.isInitialized("member") ? new com.ssafy.unibirth.member.domain.QMember(forProperty("member")) : null;
    }

}

