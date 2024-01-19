import { Fab, LinearProgress, Modal, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.css";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import AddHabits from "./components/AddHabit";
const dummyHabits = [
  {
    id: 1,
    title: "Drink Water",
    description: "Drink 8 glasses of water everyday",
    completed: false,
  },
  {
    id: 2,
    title: "Code",
    description: "Code 1 problem everyday",
    completed: false,
  },
  {
    id: 3,
    title: "Journal",
    description: "Write 2 pages in your journal",
    completed: false,
  },
  {
    id: 4,
    title: "Excersice ",
    description: "Do 7 Suryanamaskars",
    completed: false,
  },
];

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const totalHabits = habits.length;
  const habitsCompleted = habits.filter((habit) => habit.completed).length;

  const progress = Math.ceil((habitsCompleted / totalHabits) * 100);

  useEffect(() => {
    setHabits(dummyHabits);
  }, []);

  return (
    <div className={styles.habits_container}>
      <div className={styles.progress_container}>
        <div className={styles.progress_percentage}>
          <Typography variant="body2" color="gray">
            Keep going!
          </Typography>
          <Typography variant="body2" color="gray">
            {progress}%
          </Typography>
        </div>

        <div>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: "#f0f0f5",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#944adb",
              },
            }}
            value={progress}
          />
        </div>
      </div>

      {habits.map((item) => {
        return <ListItem key={item.id} item={item} setHabits={setHabits} />;
      })}

      <div className={styles.fab_container}>
      <Fab
        aria-label="add"
        color="secondary"
        onClick={() => setShowModal(true)}
      >
        <AddIcon />
      </Fab>

      </div>
      

      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal_container}>
          <AddHabits setShowModal={setShowModal} setHabits={setHabits} />
        </div>
      </Modal>
    </div>
  );
};

export default Habits;
