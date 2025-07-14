import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import styles from "./NotFoundPage.module.css";
import { ROUTERS } from "../../const";

const NotFoundPage = () => (
  <Container>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404 - Page Not Found!</h1>
      <p className={styles.message}>
        Let's go to the <Link to={ROUTERS.HOME} className={styles.link}>Home</Link> page
      </p>
    </div>
  </Container>
);

export default NotFoundPage;