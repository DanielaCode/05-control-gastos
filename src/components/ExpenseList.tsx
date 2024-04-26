import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { Expense } from "../types"
import ExpenseDetail from "./ExpenseDetail"

//SECTION - componente para mostrar los gastos agregados en el state de reducer
function ExpenseList() {
   const {state} = useBudget()
   const isEmpty = useMemo(()=>state.expenses.length===0,[state.expenses])
  return (
    <div className="mt-10">
        {
            isEmpty?
            <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>:
            (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">
                        Listado de gastos.
                    </p>
                    {
                        state.expenses.map((e:Expense)=>
                            <ExpenseDetail
                                expense={e}
                            />
                        )
                    }
                </>
            )
        }
    </div>
  )
}

export default ExpenseList