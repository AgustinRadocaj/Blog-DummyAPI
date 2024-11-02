import React from 'react'
import Login from '../Login/Login'
import styles from './Nav.module.css'

function Nav() {
  return (
    <div className={styles.container}>
      <Login />
      <a href='/users'><button className={styles.button}>Users</button></a>
      <a href='/'> <button className={styles.button}>Posts</button></a>
    </div>
  )
}

export default Nav