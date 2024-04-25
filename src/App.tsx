import BudgetForm from "./components/BudgetForm";

function App() {
  //SECTION - 8. consumir la informacion compartida en mi caso el state y el dispatch que tiene mi context
 
  //SECTION - 10. consumir el context usando un customHook, ver commit anterior para entender por que 8. esta vacio
  //FIXME - me equivoque aca era {state,dispatch} no []
  //NOTE -  por ahora no necesito esto en app pues ya no necesito pasarlo por props, uso directo en BudgetForm component
  //const {state,dispatch} = useBudget();

  return (
    <>
      <header className="">
        <h1 className="bg-blue-600 text-white from-black text-center uppercase text-4xl font-bold p-10">Control de gastos</h1>
      </header>
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg mt-10 p-10 ">
        <BudgetForm/>
      </div>
    </>
  );
}

export default App;
