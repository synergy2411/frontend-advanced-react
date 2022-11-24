import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {

    return (
        <div className="col-4 my-3">
            <div className="card">
                <div className="card-header">
                    <h6 className="text-center">{props.exp.title.toUpperCase()}</h6>
                </div>
                <div className="card-body">
                    <p>Amount  : ${props.exp.amount}</p>
                    <ExpenseDate createdAt={props.exp.createdAt} />
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem;