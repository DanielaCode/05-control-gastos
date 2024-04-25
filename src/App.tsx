import { useContext } from "react";
import BudgetForm from "./components/BudgetForm";
import { BudgetContext } from "./context/BudgetContext";

function App() {
  //SECTION - 8. consumir la informacion compartida en mi caso el state y el dispatch que tiene mi context
  //FIXME - no es la mejor manera, de consumir, mejor con custom hook
  const context = useContext(BudgetContext)
  //NOTE - va a imprimir {state:...,dispatch..} sin embargo 
  console.log(context)

  return (
    <>
      <header className="">
        <h1 className="bg-blue-600 text-white from-black text-center uppercase text-4xl font-bold p-10">Control de gastos</h1>
      </header>
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg mt-10 p-10 ">
        <BudgetForm/>
      </div>
    </>
  );
}

export default App;
