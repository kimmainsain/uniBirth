package com.ssafy.unibirth.star.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QBrightnessId is a Querydsl query type for BrightnessId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QBrightnessId extends BeanPath<BrightnessId> {

    private static final long serialVersionUID = -2003837006L;

    public static final QBrightnessId brightnessId = new QBrightnessId("brightnessId");

    public final NumberPath<Long> memberId = createNumber("memberId", Long.class);

    public final NumberPath<Long> starId = createNumber("starId", Long.class);

    public QBrightnessId(String variable) {
        super(BrightnessId.class, forVariable(variable));
    }

    public QBrightnessId(Path<? extends BrightnessId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBrightnessId(PathMetadata metadata) {
        super(BrightnessId.class, metadata);
    }

}

