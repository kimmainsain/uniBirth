package com.ssafy.unibirth.comment.repository;

import com.ssafy.unibirth.comment.domain.Comment;
import com.ssafy.unibirth.star.domain.Star;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository  extends JpaRepository<Comment, Long> {
}
