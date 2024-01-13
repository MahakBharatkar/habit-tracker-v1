import { Checkbox, Typography } from "@mui/material"
import styles from './styles.module.css';

const ListItem = ({item={}, setHabits = ()=>{}}) => {

    const {id: itemId, completed, title, description} = item;

    const updateHabitCompletion = (event) => {
        setHabits((prevHabits) => {
          return prevHabits.map((habit) => {
            if (habit.id === itemId) {
              return { ...habit, completed: event.target.checked? true: false };
            }
            return habit;
          });
        });
      };


  return (
    <div className={styles.listitem_container}>
        <Checkbox  checked={completed} color="secondary" onChange={(event)=>updateHabitCompletion(event)}/>
        <div className={styles.title_description}>
            <Typography variant="subtitle2" color="gray">{title}</Typography>
            <Typography variant="body2" color="gray">
            {description}
          </Typography>
            
        </div>
    </div>
  )
}

export default ListItem