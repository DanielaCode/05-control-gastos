import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

//SECTION - 9. crar customhook para acceder facilmente acceder al context
export function useBudget() {
  const context = useContext(BudgetContext)
  if(!context){
    throw new Error("useBudget tiene que ser usado desde un componente dentro de BudgetProvider");
  }
  return context
}