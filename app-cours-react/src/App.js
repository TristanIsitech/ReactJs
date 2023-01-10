import Expenses from './components/Expenses';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const addExpenses = (event) => {
    setExpenses((oldExpenses) => {
      return [{
        id: 'e5',
        title: event.target['name'].value,
        amount: event.target['prix'].value,
        date: new Date(2023, 1, 10),
      }, ...oldExpenses]
    }) 
    console.log(expenses)
  }

  return (
    <div>
      <h2>C'est parti</h2>
      <Expenses items={expenses} funct={addExpenses}/>
    </div>
  );
}

export default App;
