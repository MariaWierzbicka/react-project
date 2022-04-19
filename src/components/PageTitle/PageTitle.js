import styles from './PageTitle.module.scss';


const PageTitle = children => {

  return (    
    <h2 className={styles.title}>{children.title}</h2>
  )
}

export default PageTitle;