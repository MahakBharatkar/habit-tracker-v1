import styles from "./styles.module.css";
import calendar from "../../assets/calendar.png";

const TopBar = () => {
  return (
    <div className={styles.top_container}>
      <div className={styles.text_container}>
        <div className={styles.salutation_text}>Hey Champ!</div>
        <span className={styles.sub_text}>
          You have 5 habits left for today
        </span>
      </div>
      <img width={260} height={180} src={calendar} alt="calendar_image" />
    </div>
  );
};

export default TopBar;
