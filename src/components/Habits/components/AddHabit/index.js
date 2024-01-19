import React from "react";
import { useForm } from "react-hook-form";
import controls from "./controls";
import { v4 as uuidv4 } from "uuid";
import getFieldController from "./getFieldController";
import styles from "./styles.module.css";
import { Button } from "@mui/material";

const AddHabits = ({ setShowModal = () => {}, setHabits = () => {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newData = { id: uuidv4(), completed: false, ...data };

    setHabits((previousHabits) => {
      let newHabits = [];
      newHabits = [...previousHabits, newData];
      return newHabits;
    });

    reset();

    setShowModal(false);
  };

  return (
    <div>
      <span>Add new habit</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        {controls.map((controlItem) => {
          const Element = getFieldController(controlItem.type);

          if (!Element) return null;

          return (
            <div key={controlItem.name} className={controlItem.className || ""}>
              <span className={styles.label}>{controlItem.label}</span>

              <div className={styles.input_group}>
                <Element
                  {...controlItem}
                  control={control}
                  rules={controlItem.rules}
                />
                <div className={styles.error_message}>
                  {errors[controlItem.name]?.message}
                </div>
              </div>
            </div>
          );
        })}

        <div>
          <Button variant="outlined" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddHabits;
