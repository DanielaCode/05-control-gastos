import { Category, DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from "uuid"
//SECTION - type para action
export type BudgetActions = 
{type:"add-budget", payload:{budget:number}}|
{type:"show-modal"}|
{type:"close-modal"}|
{type:"add-expense", payload:{expense:DraftExpense}}|
{type:"delete-expense", payload:{id:Expense["id"]}}|
{type:"show-edit-modal", payload:{id:Expense["id"]}}|
{type:"update-expense", payload:{expense:Expense}}|
{type:"reset-app"}|
{type:"filter-expense", payload:{category:Category["id"]}}


//SECTION - recuperando el state d elocal storage
function getLSBudget():number{
    const lsb = localStorage.getItem("budget");
    return lsb?+lsb:0
}

function getLSExpenses():Expense[]{
    const lse = localStorage.getItem("expenses");
    return lse?JSON.parse(lse):[]
}

//SECTION - type para state
export type BudgetState = {
    budget:number,
    modal:boolean,
    expenses:Expense[],
    idEditedItem:Expense["id"],
    category:Category["id"]
}

//SECTION - Initial state
export const initialState:BudgetState = {
    budget: getLSBudget(),
    modal:false,
    expenses:getLSExpenses(),
    idEditedItem:"",
    category:""
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
            modal: false,
            idEditedItem:""
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

    if (action.type==="show-edit-modal") {

        return{
            ...state,
            idEditedItem:action.payload.id,
            modal:true
        }
    }

    if (action.type==="update-expense") {
        
        

        const updatedExpense = state.expenses.map(e=>e.id===action.payload.expense.id?(action.payload.expense):(e))

        return{
            ...state, 
            expenses:updatedExpense,
            modal:false,
            idEditedItem:""
        }
    }

    if (action.type==="reset-app") {
        
        return{
           ...state,
           budget:0,
           expenses:[]
        }
    }

    if (action.type==="filter-expense") {
        
        return{
           ...state,
           category:action.payload.category
        }
    }

    return state
}