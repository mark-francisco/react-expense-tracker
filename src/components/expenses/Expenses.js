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

        {/* React can render an array of JSX elements */}
        {props.items.map((expense) => {
          return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
