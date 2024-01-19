import { Checkbox, Typography } from "@mui/material";
import styles from "./styles.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItem = ({ item = {}, setHabits = () => {} }) => {
  const { id: itemId, completed, title, description } = item;

  const updateHabitCompletion = (event) => {
    setHabits((prevHabits) => {
      return prevHabits.map((habit) => {
        if (habit.id === itemId) {
          return { ...habit, completed: event.target.checked ? true : false };
        }
        return habit;
      });
    });
  };

  const deleteHabit = (id) => {
    setHabits((prevHabits) => {
      return prevHabits.filter((item) => item.id !== id);
    });
  };

  return (
    <div className={styles.listitem_container}>
      <div className={styles.listitem_subcontainer}>
        <Checkbox
          checked={completed}
          color="secondary"
          onChange={(event) => updateHabitCompletion(event)}
        />
        <div className={styles.title_description}>
          <Typography variant="subtitle2" color="gray">
            {title}
          </Typography>
          <Typography variant="body2" color="gray">
            {description}
          </Typography>
        </div>
      </div>

      <DeleteIcon
        onClick={() => deleteHabit(itemId)}
        sx={{ color: "#808080", cursor: "pointer" }}
      />
    </div>
  );
};

export default ListItem;
