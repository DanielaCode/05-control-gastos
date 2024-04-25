//SECTION - funcion para formatiiar un numero a dolares, API de JS Intl
export function formatCurrency(amount: number){
    return new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).format(amount);
}