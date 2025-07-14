import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>Contacts Book © {year}</div>
      </Container>
    </footer>
  );
};

export default Footer;
