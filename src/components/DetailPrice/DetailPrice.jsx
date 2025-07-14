import { formatPrice } from "../../utils/format";
import styles from "./DetailPrice.module.css";

const DetailPrice = ({ price, className }) => {
  return (
    <span className={`${styles.price} ${className || ''}`}>
      {formatPrice(price)}
    </span>
  );
};

export default DetailPrice;
