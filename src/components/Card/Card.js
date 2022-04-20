import styles from './Card.module.scss';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

const Card = (props) => {

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavorite( props.id ))
  }

  return (
  <li className={styles.card}>{props.title}<button type="button" className={clsx(props.isFavorite ? styles.active : undefined)} onClick={handleClick}><i className="fa fa-star-o"></i></button></li>
  );
};

export default Card;
