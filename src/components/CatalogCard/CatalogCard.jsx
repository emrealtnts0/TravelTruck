import clsx from "clsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Features from "../Features/Features";
import Rating from "../Rating/Rating";
import DetailName from "../DetailName/DetailName";
import DetailPrice from "../DetailPrice/DetailPrice";
import DetailImage from "../DetailImage/DetailImage";
import { toggleFavorite } from "../../redux/favorite/slice";
import { selectFavorites } from "../../redux/favorite/selectors";
import { ROUTERS } from "../../const";
import styles from "./CatalogCard.module.css";

const CatalogCard = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const {
    id,
    name,
    description,
    location,
    price,
    reviews = [],
    rating = 0,
    gallery = [],
  } = data;
  const isFavorite = favorites.includes(id);

  const handleFavorite = (event) => {
    event.preventDefault();
    dispatch(toggleFavorite(id));
  };

  return (
    <article className={styles.cardWrapper}>
      <DetailImage gallery={gallery} showFirst alt={name} />
      <div className={styles.cardContent}>
        <header className={styles.cardHeader}>
          <div className={styles.titleRow}>
            <DetailName name={name} overflow={false} />
            <div className={styles.priceRow}>
              <DetailPrice price={price} />
              <button
                className={clsx(styles.favoriteButton, {
                  [styles.favorited]: isFavorite,
                })}
                onClick={handleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
          <Rating
            rating={rating}
            reviewsCount={reviews.length}
            location={location}
            id={id}
            ratingAsLink
          />
        </header>
        <p className={styles.description} title={description}>
          {description}
        </p>
        <Features data={data} />
        <div className={styles.buttonWrapper}>
          <Button as={Link} to={`${ROUTERS.CATALOG}/${id}`}>
            Show more
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CatalogCard;