import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { format } from '../../functions/format';
import styles from './SearchBarNew.module.css';

function SearchBarNew({mobile}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${format(searchQuery)}`);
  };

  useEffect(() => {
    setSearchQuery('');
  }, [location])

  return (
    <form onSubmit={handleSubmit} className={`${styles.searchBar} ${mobile && styles.mobile}`}>
      <input
        type='text'
        className={styles.searchBar_input}
        placeholder='Pesquisar...'
        value={searchQuery}
        onChange={handleChange}
      />
      <button type='submit' className={styles.searchBar_button}>
        <BsSearch size={18} />
      </button>
    </form>
  );
}

export default SearchBarNew;