const ToDoList = ({ filteredToDoItems }) => {
  return (
    <ul>
      {filteredToDoItems.map((list) => {
        return <li key={list.id}>{list.task}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
