import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  // call useState() React hook. create React-managed variable where updates to its value will call the component fn again and re-evaluate/re-render the JSX/DOM elements. useState accepts 1 arg (initial state value) and returns a 2-item array [state value, updating fn]. each component instance has its own state.
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={filteredYearHandler} currentYear={filteredYear} />

        <ExpenseItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
        <ExpenseItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount} />
        <ExpenseItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount} />
        <ExpenseItem date={props.items[3].date} title={props.items[3].title} amount={props.items[3].amount} />
      </Card>
    </div>
  );
}

export default Expenses;
