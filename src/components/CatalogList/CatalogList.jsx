import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectError,
  selectTotal,
  selectCatalog,
  selectPage,
} from "../../redux/catalog/selectors";
import CatalogCard from "../CatalogCard/CatalogCard";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Message from "../Message/Message";
import { fetchMore } from "../../redux/catalog/operations";
import { updatePage } from "../../redux/catalog/slice";
import { CATALOG_LIMIT } from "../../const";
import styles from "./CatalogList.module.css";

const CatalogList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const total = useSelector(selectTotal);
  const catalog = useSelector(selectCatalog);
  const page = useSelector(selectPage);

  const totalPages = Math.ceil(total / CATALOG_LIMIT);
  const isEmpty = catalog.length === 0;
  const showLoadMore = !isEmpty && page < totalPages;

  const handleLoadMore = useCallback(() => {
    const nextPage = page + 1;
    dispatch(updatePage(nextPage));
    dispatch(fetchMore({ page: nextPage }));
  }, [dispatch, page]);

  if (loading && isEmpty) {
    return <Loader />;
  }

  if (error) {
    return <Message variant="error">{error}</Message>;
  }

  if (isEmpty) {
    return <Message variant="info">No campers found matching your criteria</Message>;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {catalog.map((card) => (
          <li key={card.id}>
            <CatalogCard data={card} />
          </li>
        ))}
      </ul>

      {loading && <Loader />}

      {showLoadMore && (
        <div className={styles.loadMore}>
          <Button
            variant="secondary"
            onClick={handleLoadMore}
            disabled={loading}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default CatalogList;