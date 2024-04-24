import BudgetForm from "./components/BudgetForm";

function App() {
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
