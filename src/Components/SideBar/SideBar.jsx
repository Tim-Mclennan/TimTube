import React from 'react'
import styles from "./SideBar.module.scss";
import { categories } from '../../Utils/constants';

const  SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.SideBar}>
        {categories && categories.map((category) => (
            <button className={category.name === selectedCategory ? styles.SideBar_Btn + ' ' + styles.SideBar_Btn_Red : styles.SideBar_Btn} key={category.name} onClick={() => setSelectedCategory(category.name)}>
                <span className={category.name === selectedCategory ? styles.SideBar_Btn_Icon : styles.SideBar_Btn_Icon + ' ' + styles.SideBar_Btn_Icon_Red}>{category.icon}</span>
                <span className={styles.SideBar_Btn_Name}>{category.name}</span>
            </button>
        ))}
    </div>
  )
}

export default SideBar


