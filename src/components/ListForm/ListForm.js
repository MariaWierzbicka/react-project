import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = (props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description}));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <span>Title:</span> <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <span>Description:</span> <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>
        Add List
      </Button>
    </form>
  )
}

export default ListForm;