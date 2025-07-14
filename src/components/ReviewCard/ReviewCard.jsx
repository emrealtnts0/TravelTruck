import { FaStar } from "react-icons/fa";
import styles from "./ReviewCard.module.css";

const STAR_COUNT = 5;

const ReviewCard = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment, date } = review;
  const rating = Math.floor(reviewer_rating);

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {reviewer_name.charAt(0).toUpperCase()}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{reviewer_name}</h3>
          <div className={styles.rating}>
            {[...Array(STAR_COUNT)].map((_, i) => (
              <FaStar 
                key={i}
                className={i < rating ? styles.activeStar : styles.star} 
              />
            ))}
          </div>
          {date && <time className={styles.date}>{date}</time>}
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </article>
  );
};

export default ReviewCard;