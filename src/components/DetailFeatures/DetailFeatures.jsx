import Features from "../Features/Features";
import SectionName from "../SectionName/SectionName";
import styles from "./DetailFeatures.module.css";

const FEATURE_ITEMS = [
  { key: "form", label: "Form" },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Height" },
  { key: "tank", label: "Tank" },
  { key: "consumption", label: "Consumption" },
];

const DetailFeatures = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <Features data={data} />
      <div>
        <SectionName>Vehicle details</SectionName>
        <ul className={styles.list}>
          {FEATURE_ITEMS.map(({ key, label }) => (
            <li key={key} className={styles.item}>
              <span className={styles.name}>{label}</span>
              <span className={styles.value}>
                {data[key] ? data[key] : "N/A"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailFeatures;