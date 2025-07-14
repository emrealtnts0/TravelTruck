import styles from "./Message.module.css";

const Message = ({ children, variant = "info" }) => {
  return (
    <div className={`${styles.message} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default Message;