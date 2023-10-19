import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ id, iconSize }) {
  const searchBarContent = localStorage.getItem('SearchBarContent') ?? '';
  localStorage.setItem('SearchBarContent', searchBarContent);

  const navigate = useNavigate();
  const [input, setInput] = useState(searchBarContent);
  const [barOpen, setBarOpen] = useState(false);

  useEffect(() => {
    setInput(searchBarContent);
    // if (localStorage.getItem('SearchBarContent').length > 0) {
    //   navigate(`/?s=${input}`);
    // };
  }, [input, navigate]);

  const handleChange = async (event) => {
    const value = event.target.value;
    localStorage.setItem('SearchBarContent', value);
    setInput(value);
  };

  const handleSearchBar = () => {
    const int = setInterval(() => {
      setBarOpen(!barOpen);
      if (barOpen) document.getElementById(id).blur();
      else document.getElementById(id).focus();
      clearInterval(int);
    }, 90); 
  }
  
  const search = () => {
    navigate(`/search/${searchBarContent.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`);
  }

  return (
    <form onBlur={handleSearchBar} autoComplete='off' className={`${styles.searchBar} ${barOpen ? styles.searchBarOpen : styles.searchBar}`}
      onSubmit={(event) => {
        event.preventDefault();
        search();
      }}>
      <BsSearch onClick={handleSearchBar} size={iconSize} className={styles.searchButton} />
      <input id={id} className={`${styles.searchInput} ${barOpen ? styles.searchInputOpen : styles.searchInput}`} type='text' placeholder='Pesquisar' value={input} onChange={handleChange}></input>
    </form>
  )
}

export default SearchBar;