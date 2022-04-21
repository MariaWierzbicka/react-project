import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';


const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [ listId ] = useState(props.listId)

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId}));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span> <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <span>Icon:</span> <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>
        Add column
      </Button>
    </form>
  )
}

export default ColumnForm;