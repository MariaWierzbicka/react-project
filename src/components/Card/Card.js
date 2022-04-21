import styles from './Card.module.scss';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavorite( props.id ));
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard( props.id ));
  }


  return (
    <li className={styles.card}><span>{props.title}</span>
      <div>
      <button type="button" className={clsx(props.isFavorite ? styles.active : undefined)} onClick={handleClick}>
        <i className="fa fa-star-o"></i>
      </button>
      <button type="button" className={styles.removeBtn} onClick={handleRemove}>
        <i className="fa fa-trash-o"></i>
      </button>
      </div>
    </li>
  );
};

export default Card;
