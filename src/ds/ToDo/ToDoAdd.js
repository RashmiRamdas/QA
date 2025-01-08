import React from "react";

const ToDoAdd = ({ handleAddTask }) => {
  const [value, setValue] = React.useState("");

  const handleOnClick = () => {
    handleAddTask(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleOnClick}>Add Task</button>
    </div>
  );
};

export default ToDoAdd;
