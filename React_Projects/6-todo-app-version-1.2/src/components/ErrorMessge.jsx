import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ checkItems }) => {
  return (
    <>
      {checkItems.length === 0 && (
        <h1 className={styles.errorMessage}>Enjoy your day</h1>
      )}
    </>
  );
};

export default ErrorMessage;
