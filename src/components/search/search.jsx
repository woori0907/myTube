import React, { useRef } from 'react';
import styles from './search.module.css';

const Search = (props) => {
     const query = useRef('');
    console.log(props);
     const onSubmit = event =>{
        event.preventDefault();
        const searchValue = query.current.value;
        searchValue&&props.onSearch(searchValue);
        searchValue = '';
     }
    
     return(
     <form onSubmit={onSubmit}>
         <input className={styles.input} ref={query} type="search" placeholder='검색어를 입력해주세요.' />
         <button className={styles.button} type="submit">
             <img src="/images/search.png" alt="search" />
         </button>
     </form>
     )      
    };

export default Search;