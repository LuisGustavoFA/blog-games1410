import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ id }) {
  const searchBarContent = localStorage.getItem('SearchBarContent') ?? '';
  localStorage.setItem('SearchBarContent', searchBarContent);

  const navigate = useNavigate();
  const [input, setInput] = useState(searchBarContent);
  const [searchInputVisibility, setSearchInputVisibility] = useState(styles.searchInput);
  const [searchBarVisibility, setSearchBarVisibility] = useState(styles.searchBar);

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

  const openBar = () => {
    setSearchBarVisibility(styles.searchBarOpen);
    document.getElementById(id).focus();
    setSearchInputVisibility(styles.searchInputOpen);
  }

  const closeBar = () => {
    setSearchBarVisibility(styles.searchBar);
    document.getElementById(id).blur();
    setSearchInputVisibility(styles.searchInput);
  }

  const search = () => {
    navigate(`/search/${searchBarContent.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`);
  }

  return (
    <form onMouseEnter={openBar} onClick={openBar} onBlur={closeBar} className={`${styles.searchBar} ${searchBarVisibility}`}
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}>
      <BsSearch className={styles.searchButton} />
      <input id={id} className={`${styles.searchInput} ${searchInputVisibility}`} type='text' value={input} onChange={handleChange}></input>
    </form>
  )
}

export default SearchBar;