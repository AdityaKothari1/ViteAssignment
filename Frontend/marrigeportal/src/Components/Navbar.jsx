

import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./user.module.css"
const Navbar = () => {
  return (
    <div className={styles.nav}>
        <Link to="/">Signup</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar