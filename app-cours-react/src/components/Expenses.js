import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
    const showTab = () => {
        return props.items.forEach(element => {
            <ExpenseItem
                title={element.title}
                amount={element.amount}
                date={element.date}
            />
        });
    }

  return (
    <Card className="expenses">
      
    </Card>
  );
}

export default Expenses;