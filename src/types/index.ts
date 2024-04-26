export type Expense = {
    id:string
    name:string
    amount:number
    category:string
    date: Value
}

export type DraftExpense = Omit<Expense,"id">

export type Category = {
    id: string,
    name: string, 
    icon: string
}

//SECTION - es para el date picker que instale de un tercero desde npm website
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];