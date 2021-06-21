import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import History from './Components/History';
import IncomeExpenses from './Components/IncomeExpenses';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <History />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
