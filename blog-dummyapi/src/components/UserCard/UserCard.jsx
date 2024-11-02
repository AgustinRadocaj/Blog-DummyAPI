import React from 'react'
import styles from './UserCard.module.css'
function UserCard({image, name}) {
  return (
    <div className={styles.container}>
        <img className={styles.userImage} src={image} alt="user image" />
        <h1 className={styles.userName}>{name}</h1> 
    </div>  
  )
}

export default UserCard