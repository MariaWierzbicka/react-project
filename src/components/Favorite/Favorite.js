import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {

  return (
    <>
      <PageTitle title="Favorite" />
      <p className={styles.description}>Lorem ipsum</p>
    </>
  )
}

export default About;