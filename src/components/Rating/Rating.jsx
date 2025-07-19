import { BsMap } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTERS, TAB_NAMES } from "../../const";
import styles from "./Rating.module.css";
import { FaArrowRight } from "react-icons/fa";

const Rating = ({
  id,
  location,
  reviewsCount,
  rating,
  ratingAsLink = false,
}) => {
  const ratingText = `${rating} (${reviewsCount} ${reviewsCount === 1 ? 'Review' : 'Reviews'})`;

  const renderRatingContent = () => {
    if (!ratingAsLink || reviewsCount === 0) {
      return ratingText;
    }

    return (
      <Link
        to={`${ROUTERS.CATALOG}/${id}?tab=${TAB_NAMES.REVIEWS}#${TAB_NAMES.REVIEWS}`}
        className={styles.ratingLink}
      >
        {ratingText}
        <FaArrowRight className={styles.ratingLinkIcon} />
      </Link>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.rating}>
        <FaStar className={styles.star} />
        {renderRatingContent()}
      </div>
      {location && (
        <div className={styles.location}>
          <BsMap />
          <span>{location}</span>
        </div>
      )}
      </div>
  );
};

export default Rating;