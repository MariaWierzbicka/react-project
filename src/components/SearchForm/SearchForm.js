import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/store';



const SearchForm = () => {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearch({search}));
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