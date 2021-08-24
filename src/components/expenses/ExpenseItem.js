import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // call useState() React hook. create React-managed variable where updates to its value will call the component fn again and re-evaluate/re-render the JSX/DOM elements. useState accepts 1 arg (initial state value) and returns a 2-item array [state value, updating fn]. each component instance has its own state.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
