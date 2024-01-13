import styles from './styles.module.css';

const TopBar = () => {
  return (
    <div className={styles.top_container}>
        
        <div className={styles.salutation_text}>Hey Champ!</div>
        <span className={styles.sub_text}>You have 5 habits left for today</span>
    </div>
  )
}

export default TopBar