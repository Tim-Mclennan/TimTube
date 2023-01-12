import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.scss';
import { GoSearch } from 'react-icons/go';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // prevents refreshing:
    event.preventDefault();
    // If a search term is initiated, nav to :
    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm(''); 
    }
  }

  return (
    <div className={styles.SearchBar}>
        <form className={styles.SearchBar_Form} onSubmit={handleSubmit}>
            <input  className={styles.SearchBar_Form_Input} type="text" placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /> 
            <button className={styles.SearchBar_Form_Btn} >
                <GoSearch />
            </button>
        </form>
    </div>
  )
}

export default SearchBar