import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.hero}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <h2 className={styles.description}>
            You can find everything you want in our catalog
          </h2>
          <Button to="/catalog">View Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;