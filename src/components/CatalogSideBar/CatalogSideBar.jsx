import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  BsDiagram3,
  BsCupHot,
  BsWind,
  BsTv,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
  BsGeoAlt,
} from "react-icons/bs";
import { PiShower } from "react-icons/pi";
import styles from "./CatalogSideBar.module.css";
import Button from "../Button/Button";
import { setFilters } from "../../redux/filters/slice";
import {
  selectFilterEquipments,
  selectFilterLocation,
  selectFilterType,
} from "../../redux/filters/selectors";
import SectionName from "../SectionName/SectionName";
import FilterBadge from "../FilterBadge/FilterBadge";
import { setObjectAsQuery } from "../../utils/format";
import { fetchCatalog } from "../../redux/catalog/operations";
import { updatePage } from "../../redux/catalog/slice";

const EQUIPMENTS = [
  { icon: <BsWind />, name: "AC", value: "AC", data: true },
  {
    icon: <BsDiagram3 />,
    name: "Automatic",
    value: "transmission",
    data: "automatic",
  },
  { icon: <BsCupHot />, name: "Kitchen", value: "kitchen", data: true },
  { icon: <BsTv />, name: "TV", value: "TV", data: true },
  { icon: <PiShower />, name: "Bathroom", value: "bathroom", data: true },
];

const VEHICLE_TYPES = [
  { icon: <BsGrid1X2 />, name: "Van", value: "panelTruck" },
  { icon: <BsGrid />, name: "Fully Integrated", value: "fullyIntegrated" },
  { icon: <BsGrid3X3Gap />, name: "Alcove", value: "alcove" },
];

const LocationInput = ({ value, onChange }) => {
  return (
    <div className={styles.locationInput}>
      <BsGeoAlt className={styles.locationIcon} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="City"
        className={styles.locationField}
      />
    </div>
  );
};

const CatalogSideBar = () => {
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const filterEquipments = useSelector(selectFilterEquipments);
  const filterLocation = useSelector(selectFilterLocation);
  const filterType = useSelector(selectFilterType);

  const [stateType, setStateType] = useState(filterType);
  const [stateLocation, setStateLocation] = useState(filterLocation);
  const [stateEquipments, setStateEquipments] = useState(filterEquipments);

  useEffect(() => {
    setStateType(filterType);
    setStateLocation(filterLocation);
    setStateEquipments(filterEquipments);
  }, [filterType, filterLocation, filterEquipments]);

  const handleChangeLocation = (value) => {
    setStateLocation(value);
  };

  const handleToggleEquipment = (equipment) => {
    setStateEquipments((prevEquipments) =>
      prevEquipments.some(
        (e) => e.name === equipment.value && e.value === equipment.data
      )
        ? prevEquipments.filter((e) => e.name !== equipment.value)
        : [...prevEquipments, { name: equipment.value, value: equipment.data }]
    );
  };

  const handleToggleType = (typeValue) => {
    setStateType((prevType) => (prevType === typeValue ? "" : typeValue));
  };

  const handleSearch = () => {
    const filters = {
      type: stateType,
      location: stateLocation,
      equipments: stateEquipments,
    };

    setSearchParams((params) => {
      params.set("location", stateLocation);
      params.set("type", stateType);
      params.set("equipments", setObjectAsQuery(stateEquipments));
      return params;
    });

    dispatch(setFilters(filters));
    dispatch(updatePage(1));
    dispatch(fetchCatalog({ page: 1 }));
  };

  const isEquipmentActive = (equipment) =>
    stateEquipments.some(
      (e) => e.name === equipment.value && e.value === equipment.data
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionName}>Location</div>
      <div className={styles.section}>
        <LocationInput value={stateLocation} onChange={handleChangeLocation} />
      </div>

      <div className={styles.section}>
        <div className={styles.sectionName}>Filters</div>

        <div className={styles.sectionGroup}>
          <SectionName>Vehicle equipment</SectionName>
          <div className={styles.filterList}>
            {EQUIPMENTS.map((equipment) => (
              <FilterBadge
                key={equipment.name}
                icon={equipment.icon}
                isActive={isEquipmentActive(equipment)}
                onClick={() => handleToggleEquipment(equipment)}
              >
                {equipment.name}
              </FilterBadge>
            ))}
          </div>
        </div>

        <div className={styles.sectionGroup}>
          <SectionName>Vehicle type</SectionName>
          <div className={styles.filterList}>
            {VEHICLE_TYPES.map((type) => (
              <FilterBadge
                key={type.name}
                icon={type.icon}
                isActive={stateType === type.value}
                onClick={() => handleToggleType(type.value)}
              >
                {type.name}
              </FilterBadge>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </div>
  );
};

export default CatalogSideBar;
