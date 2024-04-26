//SECTION - funcion para formatiiar un numero a dolares, API de JS Intl
export function formatCurrency(amount: number){
    return new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(amount);
}

//SECTION - uncion para formatear la fecha
export function formatDate(pDate:string):string{
    const date = new Date(pDate)
    //`${date.getDay()} ${date.getMonth()} ${date.getFullYear()}`
    return date.toDateString()
}

