import React from 'react'
import PostCard from '../postCard/postCard'
import { useState, useEffect } from 'react'
import { getPosts } from '../../services/apiService'
import styles from './PostDisplay.module.css'

function PostDisplay() {

    const [posts, setPosts] = useState([])

  useEffect(() => {
    const loadPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch (error) {
                setError('Hubo un problema al cargar los posts');
            }
        };

        loadPosts();
  }, [])
  
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard key={post.id}
        id={post.id}
        postOwner={post.owner}
        postText={post.text}
        postImage={post.image}
        postTags={post.tags} />
          ))}
    </div>
  )
}

export default PostDisplay