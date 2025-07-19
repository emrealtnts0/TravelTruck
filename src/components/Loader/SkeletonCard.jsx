import styles from "./SkeletonCard.module.css";

const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonImage}>
      <div className={styles.skeletonShimmer}></div>
    </div>
    <div className={styles.skeletonLine}>
      <div className={styles.skeletonShimmer}></div>
    </div>
    <div className={`${styles.skeletonLine} ${styles.short}`}>
      <div className={styles.skeletonShimmer}></div>
    </div>
    <div className={styles.skeletonLine}>
      <div className={styles.skeletonShimmer}></div>
    </div>
  </div>
);

export default SkeletonCard; 