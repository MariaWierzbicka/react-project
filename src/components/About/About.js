import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {

  return (
    <>
      <PageTitle title="About" />
      <p className={styles.description}>Lorem ipsum</p>
    </>
  )
}

export default About;