import { useBudget } from "../hooks/useBudget";
import AmountLabel from "./AmountLabel";

//SECTION - componente mostrado si ya se seteo un presupuesto, grafica y resumen
function BudgetTracker() {
  const {available,totalExpenses,state}=useBudget()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg p-10">
      <div className="flex justify-center">
        <img src="/public/grafico.jpg" alt="grafico de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <button className="bg-pink-500 w-full text-white rounded-lg p-2 uppercase">
          resetear app
        </button>
        <AmountLabel
            label="Presupuesto"
            amount={state.budget}
        />
         <AmountLabel
            label="Disponible"
            amount={available}
        />
         <AmountLabel
            label="Gastado"
            amount={totalExpenses}
        />
      </div>
    </div>
  );
}

export default BudgetTracker;
