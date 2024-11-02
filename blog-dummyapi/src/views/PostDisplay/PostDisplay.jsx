import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import { useState, useEffect } from 'react'
import { getPosts, getPostsByTag } from '../../services/apiService'
import styles from './PostDisplay.module.css'

function PostDisplay() {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])


    const searchHandler = (event) => {
      const searchTag = event.target.value;
      setSearch(searchTag);
      const postByTag = async () => {
        try {
          const response = await getPostsByTag(searchTag);
          setFilteredPosts(response.data);
        } catch (error) {
          setError('Hubo un problema al cargar los posts');
        }
      }

      postByTag();
  };

  useEffect(() => {
    const loadPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
                setFilteredPosts(response.data);
            } catch (error) {
                setError('Hubo un problema al cargar los posts');
            }
        };
        loadPosts();
  }, [])
  
  return (
    <>
    <div className={styles.wrapper}>
      <input 
        className={styles.input}          
        type="text"
        placeholder="Filtrar por tag" 
        value={search} 
        onChange={searchHandler}
      />
    </div>
    <div className={styles.container}>
      {filteredPosts.map((post) => (
        <PostCard key={post.id}
        id={post.id}
        postOwner={post.owner}
        postText={post.text}
        postImage={post.image}
        postTags={post.tags} />
          ))}
    </div>
    </>
  )
}

export default PostDisplay