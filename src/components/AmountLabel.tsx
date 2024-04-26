import { formatCurrency } from '../helpers/index';

type AmountLabelProps={
    label?:string,
    amount:number
}

//SECTION - componente mostrado cada cantidad, para no repetir
function AmountLabel({label,amount}:AmountLabelProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
        {label&&(label+": ")}
        <span className="text-black"> {formatCurrency(amount)} </span>
    </p>
  )
}

export default AmountLabel