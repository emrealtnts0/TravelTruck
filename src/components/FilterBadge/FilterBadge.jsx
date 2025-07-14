import clsx from "clsx";
import styles from "./FilterBadge.module.css";

const FilterBadge = ({ children, icon, onClick, isActive }) => {
  return (
    <button
      className={clsx(styles.badge, isActive && styles.active)}
      onClick={onClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default FilterBadge;
