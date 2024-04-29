import { useBudget } from "../hooks/useBudget";
import AmountLabel from "./AmountLabel";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"

//SECTION - componente mostrado si ya se seteo un presupuesto, grafica y resumen
function BudgetTracker() {
  const {available,totalExpenses,state,dispatch}=useBudget()
  const percentage = +((totalExpenses/state.budget)*100).toFixed(2)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg p-10">
      <div className="flex justify-center">
        <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor:percentage===100?"#DC2626":"#3B82F6",
              trailColor:"#F5F5F5",
              textSize:8,
              textColor:percentage===100?"#DC2626":"#3B82F6"
            })}
            text={`${percentage}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <button onClick={()=> dispatch({type:"reset-app"})} className="bg-pink-500 w-full text-white rounded-lg p-2 uppercase">
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
