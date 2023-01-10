import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {

    return (
        <Card className="expenses">
            {props.items.forEach(element => {
                return (<ExpenseItem
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />)
            })}
        </Card>
    );
}

export default Expenses;