import styles from "./DetailImage.module.css";

const DetailImage = ({ gallery = [], alt = "", showFirst = false }) => {
  const imagesToShow = showFirst && gallery.length > 0 ? [gallery[0]] : gallery;

  return (
    <div className={styles.wrapper}>
      {imagesToShow.map(({ thumb }, index) => (
        <img
          key={`${thumb}-${index}`}
          className={styles.image}
          src={thumb}
          alt={alt || `Gallery image ${index + 1}`}
          width="292"
          height="320"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default DetailImage;
