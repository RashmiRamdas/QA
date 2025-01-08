import React from "react";

const ToDoSearch = ({ searchText, setSearchText }) => {
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Search"
        type="text"
        value={searchText}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default ToDoSearch;
