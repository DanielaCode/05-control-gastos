import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { ChangeEvent, useState } from "react";
import { DraftExpense, Value } from "../types";

//SECTION - Form que se muestra en el modal para agregar gastos
function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    name: "",
    amount: 0,
    category: "",
    date: new Date(),
  });

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const isAmountField = ["expenseAmount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  }

  function handleChangeDate(value: Value) {
    setExpense({
      ...expense,
      date: value,
    });
  }

  return (
    <>
      <legend className="text-3xl font-black text-center border-b-4 border-blue-700 pb-2 uppercase">
        Nuevo gasto
      </legend>
      <form className="flex flex-col gap-4 mt-8">
        <label htmlFor="expenseName" className="text-2xl">
          Nombre del gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          name="expenseName"
          placeholder="Dale nombre al gasto"
          className="bg-slate-100 p-3"
          value={expense.name}
          onChange={handleOnChange}
        />

        <label htmlFor="expenseAmount" className="text-2xl">
          Monto del gasto:
        </label>
        <input
          type="text"
          id="expenseAmount"
          name="expenseAmount"
          placeholder="Cuanto gastaste"
          className="bg-slate-100 p-3"
          value={expense.amount}
          onChange={handleOnChange}
        />

        <label htmlFor="expenseCategory" className="text-2xl">
          Categoria:
        </label>
        <select
          id="expenseCategory"
          name="expenseCategory"
          className="bg-slate-100 p-3"
          onChange={handleOnChange}
        >
          <option>Selecciona</option>
          {categories.map((e) => (
            <option value={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <label htmlFor="date" className="text-2xl">
          Fecha:
        </label>
        <DatePicker
          className="bg-slate-100 p-3"
          value={expense.date}
          onChange={handleChangeDate}
        />
        <input
          type="submit"
          value="agreguemos esto"
          className="p-3 bg-blue-600 text-white uppercase text-4 font-bold rounded-lg mt-4"
        />
      </form>
    </>
  );
}

export default ExpenseForm;
