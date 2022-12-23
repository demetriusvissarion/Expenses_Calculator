import React from "react";
import "./child1.css";

const Child1 = ({ handleAdd }) => {
  return (
    <div id="counter_button_container">
      <button id="counter_button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Child1;
