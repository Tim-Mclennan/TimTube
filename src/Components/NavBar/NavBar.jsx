import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.scss';
import { BsYoutube } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <Link  to="/" className={styles.NavBar_Logo}>
            <p className={styles.NavBar_Logo_Para}>TimTube </p><span className={styles.NavBar_Logo_Para_Icon}><BsYoutube /></span>
        </Link>
        
        <SearchBar  />
    </div>
  )
}

export default NavBar