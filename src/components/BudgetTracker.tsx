import AmountLabel from "./AmountLabel";

//SECTION - componente mostrado si ya se seteo un presupuesto, grafica y resumen
function BudgetTracker() {
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
            amount={300}
        />
         <AmountLabel
            label="Disponible"
            amount={200}
        />
         <AmountLabel
            label="Gastado"
            amount={100}
        />
      </div>
    </div>
  );
}

export default BudgetTracker;
