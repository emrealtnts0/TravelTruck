import ReviewerCard from "../ReviewCard/ReviewCard";
import Message from "../Message/Message";
import styles from "./ReviewList.module.css";

const ReviewsList = ({ reviews = [] }) => {
  if (reviews.length === 0) {
    return (
      <div className={styles.wrapper}>
        <Message variant="info">No reviews yet</Message>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {reviews.map((review) => (
        <ReviewerCard 
          key={`${review.reviewer_name}-${review.date}`} 
          review={review} 
        />
      ))}
    </div>
  );
};

export default ReviewsList;
