import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useMemo, useState } from "react";
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

//SECTION - Form que se muestra en el modal para agregar gastos
function ExpenseForm() {

  //SECTION - para que cuando se haga submit y sea valido ejecute un action y guarde el gasto en el state del reducer
  const {state,dispatch, available} = useBudget()
  
  const [prevAmount,setPrevAmount] = useState(0)
  //SECTION - si se esta editando llene los campos del formulario con los datos del gasto al que se le hizo swip en update
  useEffect(()=>{
    if(state.idEditedItem){
      const tempExpense=state.expenses.filter(e=>e.id ===state.idEditedItem)[0]
      setPrevAmount(tempExpense.amount)
      setExpense(tempExpense)
    }
  },[state.idEditedItem])

  //SECTION - para que muestre diferentes titulos y texto del boton cuando se actualiza de cuando se crea un gasto nuevo
  const isUpdating = useMemo(()=>state.idEditedItem.length!==0,[state.idEditedItem])

  const initialExpense ={
    name: "",
    amount: 0,
    category: "",
    date: new Date(),
  }

  const [expense, setExpense] = useState<DraftExpense>(initialExpense);

  const [error,setError] = useState("")

  //SECTION - para el select y los inputs creados por mi, 
  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({ 
      ...expense,
      [name]: isAmountField ? Number(value) : value,
    });
  }
  //SECTION - para el Input del tercero, con el tipo que ellos definen
  function handleChangeDate(value: Value) {
    setExpense({
      ...expense,
      date: value,
    });
  }

  //SECTION - mostrar error si algun campo esta vacio al hacer submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(Object.values(expense).includes("")){
      setError("Todos los campos son necesarios")
    }else if((expense.amount-prevAmount)>available){
      setError("Ya no tienes saldo")
    }else{
      setExpense(initialExpense)
      setError("")
      if (isUpdating) {
        dispatch({type:"update-expense", payload:{expense:{...expense,id:state.idEditedItem}}})
      }else{
        dispatch({type:"add-expense", payload:{expense:expense}})
      }
    }
    
  }


  return (
    <>
      <legend className="text-3xl font-black text-center border-b-4 border-blue-700 pb-2 uppercase">
        {isUpdating?"Editando gasto":"Nuevo gasto"}
      </legend>
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-2xl">
          Nombre del gasto:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Dale nombre al gasto"
          className="bg-slate-100 p-3"
          value={expense.name}
          onChange={handleOnChange}
        />

        <label htmlFor="amount" className="text-2xl">
          Monto del gasto:
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          placeholder="Cuanto gastaste"
          className="bg-slate-100 p-3"
          value={expense.amount}
          onChange={handleOnChange}
        />

        <label htmlFor="category" className="text-2xl">
          Categoria:
        </label>
        <select
          id="category"
          name="category"
          className="bg-slate-100 p-3"
          value={expense.category}
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
          value={isUpdating?"guardar cambios":"agregar gasto"}
          className="p-3 bg-blue-600 text-white uppercase text-4 font-bold rounded-lg mt-4"
        />
        {error&&<ErrorMessage>{error}</ErrorMessage>}
      </form>
    </>
  );
}

export default ExpenseForm;
