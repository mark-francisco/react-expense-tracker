import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const toggleFormVisibilityHandler = () => {
    setFormIsVisible((prevState) => {
      return !prevState;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    toggleFormVisibilityHandler();
  };

  return (
    <div className="new-expense">
      {!formIsVisible && <button onClick={toggleFormVisibilityHandler}>Add New Expense</button>}
      {formIsVisible && (
        <ExpenseForm onCancel={toggleFormVisibilityHandler} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
