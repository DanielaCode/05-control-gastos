import { createContext, ReactNode, useMemo, useReducer } from "react";
import {
  BudgetActions,
  budgetReducer,
  BudgetState,
  initialState,
} from "../reducers/budget-reducer";

//SECTION - 5. crear type para quitar el error TS de prop value en 4.
type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
  totalExpenses: number;
  available:number;
};

//SECTION - 6. crear type para el provider y quitar el error de children que es any, poner tipo ReactNode
type BudgetProviderProps = {
  children: ReactNode;
};

//SECTION - 2. crear contexto
export const BudgetContext = createContext<BudgetContextProps>(null!);

//SECTION - 1. crear provider,es un componente con children
export function BudgetProvider({ children }: BudgetProviderProps) {
  //SECTION - 3. El state que se quiere compartir, en mi caso useReducer
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses =useMemo(()=>state.expenses.map(e=>e.amount).reduce((total,e)=>total+e,0),[state.expenses]) 

  const available = useMemo(()=>state.budget-totalExpenses,[state.expenses]) 

  return (
    //SECTION - 4.pasar los que se puso en 3. como una props a el children
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalExpenses,
        available
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
