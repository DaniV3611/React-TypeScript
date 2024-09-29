import { Link } from "react-router-dom";

/**
 * Componente `NewEmployeeBtn` que renderiza un botón para agregar un nuevo empleado.
 * Al hacer clic, redirige al formulario para crear un nuevo empleado.
 */
const NewEmployeeBtn = () => {
  return (
    <Link to="/newEmployee">
      <div className="bg-neutral-300 w-52 h-32 rounded-xl p-10 flex items-center justify-center flex-col text-neutral-800 font-bold hover:cursor-pointer hover:bg-jade hover:scale-110 hover:border-solid transition-all duration-300">
        Nuevo Empleado...
      </div>
    </Link>
  );
};

export default NewEmployeeBtn;
