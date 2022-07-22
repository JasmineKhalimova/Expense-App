function ExpenseItem(props){
    // date
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-Us', {day: '2-digit'});
    const year = props.date.getFullYear();
    return(
        <div className="expense-item">
            <div className="expense-date">
                <div className="month">{month}</div>
                <div className="day">{day}</div>
                <div className="year">{year}</div>
            </div>
            <h2>{props.title}</h2>
            <div className="expense-item__description">
                <div className="expense-item__price">€{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;