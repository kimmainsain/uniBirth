package com.ssafy.unibirth.follow.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QFollow is a Querydsl query type for Follow
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QFollow extends EntityPathBase<Follow> {

    private static final long serialVersionUID = -717127754L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QFollow follow = new QFollow("follow");

    public final com.ssafy.unibirth.member.domain.QMember followFrom;

    public final com.ssafy.unibirth.member.domain.QMember followTo;

    public final QFollowId id;

    public QFollow(String variable) {
        this(Follow.class, forVariable(variable), INITS);
    }

    public QFollow(Path<? extends Follow> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QFollow(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QFollow(PathMetadata metadata, PathInits inits) {
        this(Follow.class, metadata, inits);
    }

    public QFollow(Class<? extends Follow> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.followFrom = inits.isInitialized("followFrom") ? new com.ssafy.unibirth.member.domain.QMember(forProperty("followFrom")) : null;
        this.followTo = inits.isInitialized("followTo") ? new com.ssafy.unibirth.member.domain.QMember(forProperty("followTo")) : null;
        this.id = inits.isInitialized("id") ? new QFollowId(forProperty("id")) : null;
    }

}

