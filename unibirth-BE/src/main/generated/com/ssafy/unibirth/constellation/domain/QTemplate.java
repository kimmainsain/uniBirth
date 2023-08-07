package com.ssafy.unibirth.constellation.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QTemplate is a Querydsl query type for Template
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QTemplate extends EntityPathBase<Template> {

    private static final long serialVersionUID = -1062006671L;

    public static final QTemplate template = new QTemplate("template");

    public final com.ssafy.unibirth.common.domain.util.QBaseTimeEntity _super = new com.ssafy.unibirth.common.domain.util.QBaseTimeEntity(this);

    public final NumberPath<Integer> boardSize = createNumber("boardSize", Integer.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath imageUrl = createString("imageUrl");

    public final StringPath lineList = createString("lineList");

    public final NumberPath<Integer> pointCount = createNumber("pointCount", Integer.class);

    public final StringPath pointList = createString("pointList");

    public final StringPath title = createString("title");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QTemplate(String variable) {
        super(Template.class, forVariable(variable));
    }

    public QTemplate(Path<? extends Template> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTemplate(PathMetadata metadata) {
        super(Template.class, metadata);
    }

}

