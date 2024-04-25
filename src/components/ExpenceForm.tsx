import { categories } from "../data/categories";
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

//SECTION - es para el date picker que instale de un tercero desde npm website
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

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
          Categoria:
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
        <label htmlFor="date" className="text-2xl">
          Fecha:
        </label>
        <DatePicker
          className="bg-slate-100 p-3"
        />
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
