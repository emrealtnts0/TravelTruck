import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import DetailName from "../DetailName/DetailName";
import DetailPrice from "../DetailPrice/DetailPrice";
import DetailImage from "../DetailImage/DetailImage";
import Tabs from "../Tabs/Tabs";
import BookForm from "../BookForm/BookForm";
import DetailFeatures from "../DetailFeatures/DetailFeatures";
import ReviewList from "../ReviewList/ReviewList";
import { TAB_NAMES } from "../../const";
import useScrollToAnchor from "../../hooks/useScrollToAnchor";
import styles from "./DetailContent.module.css";

const TABS = [TAB_NAMES.FEATURES, TAB_NAMES.REVIEWS];

const DetailContent = ({ data }) => {
  const [searchParams] = useSearchParams();
  const searchTab = searchParams.get("tab");
  const [currentTab, setCurrentTab] = useState(searchTab || TABS[0]);
  useScrollToAnchor();
  
  const {
    id,
    name,
    description,
    location,
    price,
    reviews,
    rating,
    gallery = [],
  } = data;

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const renderTabContent = () => {
    switch(currentTab) {
      case TAB_NAMES.FEATURES:
        return <DetailFeatures data={data} />;
      case TAB_NAMES.REVIEWS:
        return <ReviewList reviews={reviews} />;
      default:
        return <div>Please, choose a tab</div>;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.nameRow}>
          <DetailName name={name} overflow={false} />
          <Rating
            rating={rating}
            reviewsCount={reviews.length}
            location={location}
            id={id}
          />
          <DetailPrice price={price} />
        </div>
        <DetailImage gallery={gallery} />
        <div className={styles.description}>{description}</div>
      </div>
      
      <div className={styles.footer}>
        <Tabs tabs={TABS} onChange={handleTabChange} currentTab={currentTab} />
        <div id={currentTab} className={styles.content}>
          <div className={styles.contentSide}>
            {renderTabContent()}
          </div>
          <div className={styles.contentSide}>
            <BookForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;