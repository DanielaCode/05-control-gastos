import { DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from "uuid"
//SECTION - type para action
export type BudgetActions = 
{type:"add-budget", payload:{budget:number}}|
{type:"show-modal"}|
{type:"close-modal"}|
{type:"add-expense", payload:{expense:DraftExpense}}|
{type:"delete-expense", payload:{id:Expense["id"]}}



//SECTION - type para state
export type BudgetState = {
    budget:number,
    modal:boolean,
    expenses:Expense[]
}

//SECTION - Initial state
export const initialState:BudgetState = {
    budget: 0,
    modal:false,
    expenses:[]
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

    if (action.type==="show-modal") {
        
        return{
            ...state,
            modal: true
        }
    }

    if (action.type==="close-modal") {
        
        return{
            ...state,
            modal: false
        }
    }


    if (action.type==="add-expense") {
        
        const newExpense:Expense = {
            ...action.payload.expense,
            id: uuidv4()
        }

        return{
            ...state,
            expenses: [...state.expenses, newExpense],
            modal:false
        }
    }

    if (action.type==="delete-expense") {

        return{
            ...state,
            expenses: state.expenses.filter(e=>e.id !== action.payload.id )
        }
    }

    return state
}