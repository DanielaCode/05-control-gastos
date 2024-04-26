import { Expense } from "../types"
import AmountLabel from "./AmountLabel"
import { categories } from '../data/categories';
import { useMemo } from "react";
import { formatDate } from '../helpers/index';

type ExpenseDetailProps = {
    expense:Expense
}

//SECTION - componente que muestra el detalle de cada detalle, se renderizan en la lista
function ExpenseDetail({expense}:ExpenseDetailProps) {
    const category =useMemo(()=>categories.filter((e)=>e.id ===expense.category)[0],[expense]) 
  return (
    <div key={expense.id} className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-lg m-2 grid grid-cols-1 justify-center md:grid-cols-3 md:items-center">
        <img src={`/public/icono_${category.icon}.svg`} alt="expense icon" className="w-28 justify-self-center md:justify-self-start"/>
        <div className="flex flex-col items-stretch">
            <p className="text-lg font-bold uppercase text-slate-500">{expense.name}</p>
            <p className="text-slate-600 text-sm">{category.name}</p>
            <p className="uppercase text-sm">{formatDate(expense.date!.toString())}</p>
        </div>
        <div className="flex md:justify-end items-center">
            <AmountLabel label={""} amount={expense.amount}/>
        </div>
    </div>
  )
}

export default ExpenseDetail