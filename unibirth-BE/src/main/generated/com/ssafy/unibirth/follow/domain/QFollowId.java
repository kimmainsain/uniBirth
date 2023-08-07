package com.ssafy.unibirth.follow.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QFollowId is a Querydsl query type for FollowId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QFollowId extends BeanPath<FollowId> {

    private static final long serialVersionUID = -1965001871L;

    public static final QFollowId followId = new QFollowId("followId");

    public final NumberPath<Long> followFrom = createNumber("followFrom", Long.class);

    public final NumberPath<Long> followTo = createNumber("followTo", Long.class);

    public QFollowId(String variable) {
        super(FollowId.class, forVariable(variable));
    }

    public QFollowId(Path<? extends FollowId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFollowId(PathMetadata metadata) {
        super(FollowId.class, metadata);
    }

}

