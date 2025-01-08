import React from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoList from "./ToDoList";
import ToDoSearch from "./ToDoSearch";

// Things to Note:
// For dynamic id generation use Dtae.now()
// See how filteredToDoItems is passed to ToDoList component which displays the list of todos instead of state data.

const ToDo = () => {
  const [toDoList, setToDoList] = React.useState([
    { id: "1234", task: "Reading" },
    { id: "5678", task: "Dancing" },
    { id: "9101", task: "Painting" },
  ]);
  const [searchText, setSearchText] = React.useState("");

  const handleAddTask = (value) => {
    console.log("handleAddTask ", value);
    if (value !== "") {
      const toDo = { id: Date.now(), task: value };
      setToDoList([...toDoList, toDo]);
    }
  };

  const filteredToDoItems = React.useMemo(() => {
    if (searchText === "") {
      return toDoList;
    }
    const filteredItems = toDoList.filter((item) =>
      item.task.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredItems;
  }, [searchText, toDoList]);

  return (
    <div>
      <h2>To Do App with add and search functionality</h2>
      <ToDoSearch searchText={searchText} setSearchText={setSearchText} />
      <ToDoList filteredToDoItems={filteredToDoItems} />
      <ToDoAdd handleAddTask={handleAddTask} />
    </div>
  );
};

export default ToDo;
