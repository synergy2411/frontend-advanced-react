import React, { useState } from "react";
import AddExpense from "./AddExpense/AddExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";


const INITIAL_EXPENSES = [{
    id: "e001",
    title: "shopping",
    amount: 19.9,
    createdAt: new Date("Dec 21, 2021")
}, {
    id: "e002",
    title: "insurance",
    amount: 29.9,
    createdAt: new Date("Jan 2, 2020")
}, {
    id: "e003",
    title: "grocery",
    amount: 11.9,
    createdAt: new Date("Aug 22, 2022")
}]

const Expenses = () => {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const [show, setShow] = useState(false);

    const [selectedYear, setSelectedYear] = useState('2019')

    const showClickHandler = () => setShow(!show);

    const onAddExpense = (title, amount, createdAt) => {
        let newExpense = {
            id: "e00" + (expenses.length + 1),
            title,
            amount,
            createdAt: new Date(createdAt)
        }
        setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    }

    const onDeleteExpense = id => {
        const filteredExpenses = expenses.filter(exp => exp.id !== id)
        setExpenses(filteredExpenses);
    }

    const onFilterYear = selYear => setSelectedYear(selYear);       // << 2022


    let filteredExp = expenses.filter(exp => exp.createdAt.getFullYear().toString() === selectedYear)

    return (
        <div className="container">
            <p className="display-4 text-center">
                My Expenses
            </p>

            <div className="row">
                <div className="col-4 offset-4">
                    <div className="d-grid">
                        <button className="btn btn-dark"
                            onClick={showClickHandler}>
                            {show ? 'Hide' : 'Show'} Add Expense
                        </button>
                    </div>
                </div>
                <div className="col-4">
                    <ExpenseFilter onFilterYear={onFilterYear} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    {show && <AddExpense onAddExpense={onAddExpense} />}
                </div>
            </div>

            <div className="row">
                {filteredExp.map(expense => <ExpenseItem key={expense.id} exp={expense} onDeleteExpense={onDeleteExpense} />)}
            </div>

        </div>
    )
}

export default Expenses;






// {/* <h1 class="heading">JSX Code works</h1> */}

// <div>
//     <h2>This is heading</h2>
//     <ul>
//         <li>
//             <a href="/home">HOME</a>
//         </li>
//     </ul>
// </div>











// import React from "react";

// // < v16.8
// class Expenses extends React.Component {
//     render(){
//         return (
//             <h2>Class based component loaded</h2>
//         )
//     }
// }


