import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
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
