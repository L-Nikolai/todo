import React from "react";

const FilterButtons = ({ changeFilter }) => {
  return (
    <div>
      <button onClick={() => changeFilter("All")}>All</button>
      <button onClick={() => changeFilter("Todo")}>Todo</button>
      <button onClick={() => changeFilter("Done")}>Done</button>
    </div>
  );
};

export default FilterButtons;
