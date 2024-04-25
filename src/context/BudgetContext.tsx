import { createContext, ReactNode, useReducer } from "react";
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

  return (
    //SECTION - 4.pasar los que se puso en 3. como una props a el children
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
