
import './App.css';
import ExpenseItem from './components/ExpenseItem.';
function App() {
  const items={
    id:1,
    item_name:"bus"
  }
  return (
    <>
    <h1>Hi swarna</h1>
    <p>welcome</p>
    <ExpenseItem items={items}></ExpenseItem>
    </>
  );
}

export default App;
