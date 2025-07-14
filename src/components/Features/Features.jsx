import styles from "./Features.module.css";
import {
  BsDiagram3,
  BsCupHot,
  BsFuelPump,
  BsTv,
  BsWind,
  BsUiRadios,
} from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { PiShower, PiOvenLight } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";

const Features = ({ data }) => {
  const {
    kitchen,
    TV,
    bathroom,
    AC,
    refrigerator,
    transmission,
    gas,
    water,
    radio,
    microwave,
    engine,
  } = data;

  return (
    <ul className={styles.wrapper}>
      {transmission && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsDiagram3 />
          </span>
          {transmission}
        </li>
      )}
      {engine && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsFuelPump />
          </span>
          {engine}
        </li>
      )}
      {kitchen && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsCupHot />
          </span>
          Kitchen
        </li>
      )}
      {AC && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsWind />
          </span>
          AC
        </li>
      )}
      {TV && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsTv />
          </span>
          TV
        </li>
      )}
      {bathroom && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <PiShower />
          </span>
          Bathroom
        </li>
      )}
      {refrigerator && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <TbFridge />
          </span>
          Refrigerator
        </li>
      )}
      {microwave && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <LuMicrowave />
          </span>
          Microwave
        </li>
      )}
      {radio && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <BsUiRadios />
          </span>
          Radio
        </li>
      )}
      {gas && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <PiOvenLight />
          </span>
          Gas
        </li>
      )}
      {water && (
        <li className={styles.badge}>
          <span className={styles.icon}>
            <IoWaterOutline />
          </span>
          Water
        </li>
      )}
    </ul>
  );
};

export default Features;
