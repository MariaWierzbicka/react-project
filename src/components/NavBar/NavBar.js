import styles from './NavBar.module.scss';


const NavBar = () => {
  return (
    <nav>
      <div className={styles.navBar}>
        <a href="/"><i className="fa fa-tasks"></i></a>
        <ul className={styles.links}>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;