import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import DetailContent from "../../components/DetailContent/DetailContent";
import Message from "../../components/Message/Message";
import { fetchDetail } from "../../api";
import styles from "./DetailPage.module.css";

const DetailPage = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchDetail(id);
        setDetail(data);
        setError("");
      } catch ({ message, status }) {
        setError(
          status === 404 
            ? "No data found." 
            : message || "Oops, something went wrong!"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className={styles.wrapper}>
        {error && <Message variant="error">{error}</Message>}
        {detail && <DetailContent data={detail} />} {}
      </div>
    </Container>
  );
};

export default DetailPage;