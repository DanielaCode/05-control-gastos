import { useState } from "react";

function BudgetForm() {
  const [budget, setBudget] = useState(0);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBudget(e.target.valueAsNumber);
  }
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
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white from-black font-bold p-2 uppercase text-base w-full"
      />
    </form>
  );
}

export default BudgetForm;
