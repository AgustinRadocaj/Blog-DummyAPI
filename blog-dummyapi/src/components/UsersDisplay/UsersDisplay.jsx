import React, { useEffect, useState } from 'react'
import UserCard from '../UserCard/UserCard'
import { getUsers } from '../../services/apiService'
import styles from './UserDisplay.module.css'

function UsersDisplay() {

    const [users, setUsers] = useState([])

    useEffect(() => {
      const loadUsers = async () => {
        try {
          const response = await getUsers()
          setUsers(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      loadUsers()
    }, [])
 console.log(users)
  return (
    <div className={styles.container}>
        {users.map((user, index) => (
            <UserCard 
            key={index} 
            image={user.picture} 
            name={`${user.firstName} ${user.lastName}`} 
            />))}
    </div>
  )
}

export default UsersDisplay