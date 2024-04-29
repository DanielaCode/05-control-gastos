import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {


  const {state} = useBudget();
  
  //SECTION - valida si el presupuesto ingresado en el input es valido, si si esconde el form y muestra otro nuevo componente
  const isValidBudget = useMemo(()=>state.budget > 0 ,[state.budget])
 
  //SECTION - escribiendo en localstorage el presupuesto y los gastos 
  useEffect(()=>{
    localStorage.setItem("budget",state.budget.toString())
    localStorage.setItem("expenses",JSON.stringify(state.expenses))
  },[state])
  
  return (
    <>
      <header className="">
        <h1 className="bg-blue-600 text-white from-black text-center uppercase text-4xl font-bold p-10">Control de gastos</h1>
      </header>
      <main className="max-w-4xl mx-auto mt-10 p-10">
        {isValidBudget?(
          <>
            <BudgetTracker/>
            <ExpenseModal/>
            <ExpenseList/>
          </>
          ):<BudgetForm/>
        }
      </main>
    </>
  );
}

export default App;
