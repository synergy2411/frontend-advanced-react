import React from "react";

const Expenses = () => {

    let expense = {
        id: "e001",
        title: "shopping",
        amount: 19.9,
        createdAt: new Date("Dec 21, 2021")
    }

    return (
        <div className="container">
            <p className="display-4 text-center">
                My Expenses
            </p>

            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-center">{expense.title.toUpperCase()}</h6>
                        </div>
                        <div className="card-body">
                            <p>Amount  : ${expense.amount}</p>
                            <p>Created At : {expense.createdAt.toString()}</p>
                        </div>
                    </div>
                </div>
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


