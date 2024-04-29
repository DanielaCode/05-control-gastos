import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { Expense } from "../types"
import ExpenseDetail from "./ExpenseDetail"

//SECTION - componente para mostrar los gastos agregados en el state de reducer
function ExpenseList() {
   const {state} = useBudget()
   const filteredList = useMemo(() => state.category!=="0"? state.expenses.filter(e => e.category === state.category):state.expenses,[state.category])
   const isEmpty = useMemo(()=>filteredList.length===0,[filteredList])
  return (
    <div className="mt-10">
        {
            isEmpty?
            <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>:
            (
                <div className="max-w-4xl" >
                    <p className="text-gray-600 text-2xl font-bold my-5">
                        Listado de gastos.
                    </p>
                    {
                        filteredList.map((e:Expense)=>
                            <ExpenseDetail
                                key={e.id}
                                expense={e}
                            />
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default ExpenseList