import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';


const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state))

  if (cards.length === 0) return <PageTitle title="No favorites yet" />

  return (
    < >
      <PageTitle title="Favorite" />
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} /> )}
        </ul>
      </article>
    </ >
  )
}

export default Favorite;