import { Expense } from "../types";
import AmountLabel from "./AmountLabel";
import { categories } from "../data/categories";
import { useMemo } from "react";
import { formatDate } from "../helpers/index";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { useBudget } from "../hooks/useBudget";

type ExpenseDetailProps = {
  expense: Expense;
};

//SECTION - componente que muestra el detalle de cada detalle, se renderizan en la lista
function ExpenseDetail({ expense }: ExpenseDetailProps) {
  
  const category = useMemo(
    () => categories.filter((e) => e.id === expense.category)[0],
    [expense]
  );

  const {dispatch} = useBudget()

  //SECTION - menu que se muestra al deslizar un item a la derecha
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type:"show-edit-modal",payload:{id:expense.id}})}>
        Update
      </SwipeAction>
    </LeadingActions>
  );

  //SECTION - menu que se muestra al deslizar un item a la izquierda
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({type:"delete-expense",payload:{id:expense.id}})}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        className="my-1 shadow-lg "
      >
        <div
          key={expense.id}
          className="w-full mx-auto bg-white p-10 grid grid-cols-1 justify-center md:grid-cols-3 md:items-center"
        >
          <img
            src={`/public/icono_${category.icon}.svg`}
            alt="expense icon"
            className="w-28 justify-self-center md:justify-self-start"
          />
          <div className="flex flex-col items-stretch">
            <p className="text-lg font-bold uppercase text-slate-500">
              {expense.name}
            </p>
            <p className="text-slate-600 text-sm">{category.name}</p>
            <p className="uppercase text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>
          <div className="flex md:justify-end items-center">
            <AmountLabel label={""} amount={expense.amount} />
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default ExpenseDetail;
