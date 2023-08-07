package com.ssafy.unibirth.constellation.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QPinId is a Querydsl query type for PinId
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QPinId extends BeanPath<PinId> {

    private static final long serialVersionUID = 1376239865L;

    public static final QPinId pinId = new QPinId("pinId");

    public final NumberPath<Long> constellationId = createNumber("constellationId", Long.class);

    public final NumberPath<Long> memberId = createNumber("memberId", Long.class);

    public QPinId(String variable) {
        super(PinId.class, forVariable(variable));
    }

    public QPinId(Path<? extends PinId> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPinId(PathMetadata metadata) {
        super(PinId.class, metadata);
    }

}

