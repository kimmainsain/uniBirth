package com.ssafy.unibirth.planet.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPlanet is a Querydsl query type for Planet
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPlanet extends EntityPathBase<Planet> {

    private static final long serialVersionUID = -616559804L;

    public static final QPlanet planet = new QPlanet("planet");

    public final com.ssafy.unibirth.common.domain.util.QBaseTimeEntity _super = new com.ssafy.unibirth.common.domain.util.QBaseTimeEntity(this);

    public final ListPath<com.ssafy.unibirth.constellation.domain.Constellation, com.ssafy.unibirth.constellation.domain.QConstellation> constellationList = this.<com.ssafy.unibirth.constellation.domain.Constellation, com.ssafy.unibirth.constellation.domain.QConstellation>createList("constellationList", com.ssafy.unibirth.constellation.domain.Constellation.class, com.ssafy.unibirth.constellation.domain.QConstellation.class, PathInits.DIRECT2);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath title = createString("title");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public QPlanet(String variable) {
        super(Planet.class, forVariable(variable));
    }

    public QPlanet(Path<? extends Planet> path) {
        super(path.getType(), path.getMetadata());
    }

    public QPlanet(PathMetadata metadata) {
        super(Planet.class, metadata);
    }

}

