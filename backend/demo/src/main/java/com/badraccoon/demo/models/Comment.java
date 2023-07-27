package com.badraccoon.demo.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long commentId;
    private String contentBody;
    @Column(updatable = false)
    private Date submittedOn;
    private Date lastEdited;
    @OneToMany(mappedBy = "threadRoot", fetch = FetchType.LAZY)
    private List<Comment> replies;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_id")
    private Comment threadRoot;
    @ManyToOne(fetch = FetchType.LAZY)
    private User commenter;
    @ManyToOne(fetch = FetchType.LAZY)
    private Post post;
}
