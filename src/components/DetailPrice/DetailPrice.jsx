import { formatPrice } from "../../utils/format";
import styles from "./DetailPrice.module.css";

const DetailPrice = ({ price, className }) => {
  const [amount, currency] = formatPrice(price).split(" ");
  return (
    <span className={`${styles.price} ${className || ''}`}>
      {amount}
      <span className={styles.currency}>{currency}</span>
    </span>
  );
};

export default DetailPrice;

