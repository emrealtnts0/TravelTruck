import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { ROUTERS } from "../../const";
import styles from "../styles/navigation.module.css";

const buildClassName = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={buildClassName} to={ROUTERS.HOME}>
        Home
      </NavLink>
      <NavLink className={buildClassName} to={ROUTERS.CATALOG}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
