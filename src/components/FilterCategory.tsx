import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

//SECTION - componente para seleccionar la categoria por la que se quiere filtrar
function FilterCategory() {
    const{dispatch,state}=useBudget()
    function handleOnChange(e:React.ChangeEvent<HTMLSelectElement>){
        dispatch({type:"filter-expense",payload:{category:e.target.value}})
    }
  return (
    <form className="flex flex-col bg-white shadow-lg p-10 my-10 space-y-4">
      <label htmlFor="category" className="text-2xl">
        Selecciona la categoria:
      </label>
      <select
        id="category"
        name="category"
        className="bg-slate-100 p-3 w-full"
        value={state.category}
        onChange={handleOnChange}
      >
        <option>Selecciona</option>
        {categories.map((e) => (
          <option value={e.id} key={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default FilterCategory;
