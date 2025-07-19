import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { ROUTERS } from "../../const";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <Link to={ROUTERS.HOME} className={styles.brand}>
          Travel<span className={styles.highlight}>Trucks</span>
        </Link>
        <div className={styles.navAndToggle}>
          <div className={styles.navWrapper}>
            <Navigation className={styles.nav} />
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;