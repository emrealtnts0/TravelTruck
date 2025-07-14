import styles from "./SectionName.module.css";

const SectionName = ({ children }) => {
  return <h3 className={styles.name}>{children}</h3>;
};

export default SectionName;
