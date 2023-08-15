package com.badraccoon.demo.models;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long commentId;
    @Column(name = "body")
    private String contentBody;
    @Column(updatable = false, name = "posted_on")
    private Date submittedOn;
    @Column(name = "edited_on")
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

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getContentBody() {
        return contentBody;
    }

    public void setContentBody(String contentBody) {
        this.contentBody = contentBody;
    }

    public Date getSubmittedOn() {
        return submittedOn;
    }

    public void setSubmittedOn(Date submittedOn) {
        this.submittedOn = submittedOn;
    }

    public Date getLastEdited() {
        return lastEdited;
    }

    public void setLastEdited(Date lastEdited) {
        this.lastEdited = lastEdited;
    }

    public List<Comment> getReplies() {
        return replies;
    }

    public void setReplies(List<Comment> replies) {
        this.replies = replies;
    }

    public Comment getThreadRoot() {
        return threadRoot;
    }

    public void setThreadRoot(Comment threadRoot) {
        this.threadRoot = threadRoot;
    }

    public User getCommenter() {
        return commenter;
    }

    public void setCommenter(User commenter) {
        this.commenter = commenter;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @PrePersist
    public void onPost() {
        this.submittedOn = new Date();
    }

    @PreUpdate
    public void onEdit() {
        this.lastEdited = new Date();
    }
}
