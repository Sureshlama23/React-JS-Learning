import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <center>
      <h1 className={styles.message}> There is no posts </h1>
      <button className="btn btn-primary"> Get server start</button>
    </center>
  );
};

export default WelcomeMessage;
