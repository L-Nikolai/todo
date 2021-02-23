import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import FilterButtons from "./filter-buttons";
import Form from "./form";
import List from './list'
import { todoReducer } from "./reducer";


function App() {
  const [state, dispath] = useReducer(todoReducer, []);
  const [input, changeInput] = useState(null);
  const [filter, changeFilter] = useState("all");
  const [filteredState, changeFilteredState] = useState([]);

  useEffect(() => {
    handlerFilter();
  }, [filter, state]);

  const handlerFilter = () => {
    switch (filter) {
      case "Done":
        changeFilteredState(state.filter((item) => item.checked === true));
        break;
      case "Todo":
        changeFilteredState(state.filter((item) => item.checked === false));
        break;
      default:
        changeFilteredState(state);
        break;
    }
  };
  return (
    <>
      <div className="App">
        <h1> My todo</h1>
        <FilterButtons changeFilter={changeFilter} />
        <Form
          value={input}
          onSubmit={(e) => {
            e.preventDefault();
            dispath({ type: "add", payload: input });
            changeInput("");
          }}
          onChange={(e) => {
            const value = e.target.value;
            changeInput(value);
          }}
        />
        <br />
        <br />
        <List state={filteredState} dispath={dispath} />
      </div>
    </>
  );
}

export default App;
