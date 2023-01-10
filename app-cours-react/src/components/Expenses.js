import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {

    const onSubmit = (event) => {
        event.preventDefault()
        props.funct(event)
    }

    return (
        <Card className="expenses">
            <form onSubmit={onSubmit}>
                <label for="name">Enter votre dépense: </label>
                <input type="text" name="name" id="name" />

                <label for="prix">Enter le prix: </label>
                <input type="number" name="prix" id="prix" />

                <input type="submit" value="Ajouter" />
            </form>

            {props.items.map((expense) => (
                <ExpenseItem key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            }
        </Card>
    );
}

export default Expenses;