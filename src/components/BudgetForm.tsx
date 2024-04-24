import { useMemo, useState } from "react";

function BudgetForm() {
  const [budget, setBudget] = useState(0);

  //SECTION - el handler de cuando escriben en el input de definir presupuesto
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBudget(e.target.valueAsNumber);
  }

  //SECTION - validador de si el budget es menor a cero o NaN entonces desabilita el boton de submit
  const isValid = useMemo(() => isNaN(budget) || budget <= 0, [budget]);
  //NOTE - Recuerda que useMemo es una alternativa para evitar poner logica en el template, mejorar performance, y mas limpio que un state derivado por que no tienes que poner en el template isValid() solo isValid

  return (
    <form className="space-y-5">
      <section className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-blue-600 text-4xl from-black font-bold text-center"
        >
          Define tu presupuesto
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          placeholder="Cuanto tienes"
          className="border-gray-200  border-solid border-2 w-full p-2"
          value={budget}
          onChange={handleChange}
        />
      </section>
      <input
        type="submit"
        value="definir presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white from-black font-bold p-2 uppercase text-base w-full disabled:opacity-40"
        disabled={isValid}
      />
    </form>
  );
}

export default BudgetForm;
