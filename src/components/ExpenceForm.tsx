import { categories } from "../data/categories";

//SECTION - Form que se muestra en el modal para agregar gastos
function ExpenceForm() {
  return (
    <>
      <legend className="text-3xl font-black text-center border-b-4 border-blue-700 pb-2 uppercase">
        Nuevo gasto
      </legend>
      <form className="flex flex-col gap-4 mt-8">
        <label htmlFor="expenceName" className="text-2xl">
          Nombre del gasto:
        </label>
        <input
          type="text"
          id="expenceName"
          name="expenceName"
          placeholder="Dale nombre al gasto"
          className="bg-slate-100 p-3"
        />

        <label htmlFor="expenceAmount" className="text-2xl">
          Nombre del gasto:
        </label>
        <input
          type="text"
          id="expenceAmount"
          name="expenceAmount"
          placeholder="Cuanto gastaste"
          className="bg-slate-100 p-3"
        />

        <label htmlFor="expenceCategory" className="text-2xl">
          Nombre del gasto:
        </label>
        <select
          id="expenceCategory"
          name="expenceCategory"
          className="bg-slate-100 p-3"
        >
            <option>Selecciona</option>
            {categories.map(e=>
              <option value={e.id}>{e.name}</option>
            )}
            
        </select>
        <input 
            type="submit" 
            value="agreguemos esto" 
            className="p-3 bg-blue-600 text-white uppercase text-4 font-bold rounded-lg mt-4"
        />
      </form>
    </>
  );
}

export default ExpenceForm;
