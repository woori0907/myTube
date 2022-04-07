import React, { memo, useRef } from 'react';
import Search from '../search/search';
import styles from './navbar.module.css';


const Navbar = memo(
    ({onSearch}) => {

        const query = useRef('');
    
        const onClick = event => {
            event.preventDefault();
            handleSearch();
        }
        // const onKeyPress = event =>{
        //     event.preventDefault();
        //     if(event.key === 'Enter'){
        //         handleSearch();
        //     }
        // }
    
         const handleSearch = () => {
            const searchValue = query.current.value;
            searchValue&&onSearch(searchValue);
         }
    
         return (
         <header className={styles.header}>
             <div className={styles.logo}>
                <img className={styles.logoImg} src="../images/logo.png" alt="" />
                <h1 className={styles.title}>Youtube</h1>
             </div>
             <input className={styles.input} ref={query} type="search" placeholder='검색어를 입력해주세요.'  />
                <button onClick={onClick} className={styles.button} type="submit">
                    <img className={styles.buttonImg} src="/images/search.png" alt="search" />
                </button>
             
             {/* <nav>
                 <Search onSearch={props.onSearch}/>
             </nav> */}
         </header>);   
        }
);

export default Navbar;