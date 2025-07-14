import { FadeLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <FadeLoader
        color="var(--color-button)"
        size={60}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loader;
