const controls = [
    {
      type: "input",
      label: "Title",
      name: "title",
      placeholder: "Enter Habit title",
      rules: {
        required: "Title is required",
        pattern: {
          value: /^(?=.*\S)[a-zA-Z0-9 _-]{3,50}$/,
          message: "Invalid title",
        },
      },
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
      placeholder: "Enter Habit description",
      maxLength: 60,
    },
  ];
  
  export default controls;
  