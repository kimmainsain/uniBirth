package com.ssafy.unibirth.constellation.repository;

import com.ssafy.unibirth.constellation.domain.Template;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemplateRepository  extends JpaRepository<Template, Long> {
}
