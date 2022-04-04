import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



const SearchForm = () => {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const lowCaseSearch = search.toLowerCase();
    dispatch({ type: 'SEARCH', payload: { lowCaseSearch } });
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder="Search..." onChange={e => setSearch(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;