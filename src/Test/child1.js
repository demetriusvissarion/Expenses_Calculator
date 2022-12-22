import React from "react";
import "./child1.css";

const Child1 = ({ handleAdd }) => {
  return (
    <div className="child1_container">
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Child1;
