import React from 'react'
import styles from './PostCard.module.css'
import { Link } from 'react-router-dom';


function PostCard({id, postOwner, postText, postImage, postTags}) {
  return (
    <div className={styles.container}>
        <Link to={`/post/${id}`}>
        <img
          className={styles.postImage}
          src={postImage}
          alt="post image"
        />
        <div className={styles.postOwner}>{postOwner.firstName} {postOwner.lastName}</div>
        <div className={styles.postTags}>
        {postTags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      </Link>
    </div>
  )
}

export default PostCard