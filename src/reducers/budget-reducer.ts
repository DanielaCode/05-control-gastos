//SECTION - type para action
export type BudgetActions = 
{type:"add-budget", payload:{budget:number}}

//SECTION - type para state
export type BudgetState = {
    budget:number
}

//SECTION - Initial state
export const initialState:BudgetState = {
    budget: 0
}

//SECTION - Reducer
export function budgetReducer(
    state:BudgetState=initialState,
    action:BudgetActions
){

    if (action.type==="add-budget") {
        
        return{
            ...state,
            budget:action.payload.budget
        }
    }

    return state
}