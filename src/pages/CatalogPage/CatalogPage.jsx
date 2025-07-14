import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import CatalogList from "../../components/CatalogList/CatalogList";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import { setFilters } from "../../redux/filters/slice";
import { parseQueryAsObject } from "../../utils/format";
import { fetchCatalog } from "../../redux/catalog/operations";
import { resetCatalog } from "../../redux/catalog/slice";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filters = {
      type: searchParams.get("type") || "",
      location: searchParams.get("location") || "",
      equipments: parseQueryAsObject(searchParams.get("equipments") || ""),
    };

    dispatch(setFilters(filters));
    dispatch(resetCatalog());
    dispatch(fetchCatalog());
  }, [searchParams, dispatch]);

  return (
    <Container>
      <h1 className="visually-hidden">Catalog</h1>
      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <CatalogSideBar />
        </aside>
        <main className={styles.content}>
          <CatalogList />
        </main>
      </div>
    </Container>
  );
};

export default CatalogPage;