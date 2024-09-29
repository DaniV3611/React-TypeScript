import { Link } from "react-router-dom";
import { Employee } from "../types/employeeTypes";

/**
 * Componente `Card` que muestra la información de un empleado en una tarjeta.
 * Al hacer clic en la tarjeta, redirige a la página con los detalles del empleado.
 *
 * @param {Employee} empInfo - Información del empleado que se mostrará en la tarjeta.
 */
const Card = ({ empInfo }: { empInfo: Employee }) => {
  return (
    <Link to={`/${empInfo.id}`}>
      <div className="bg-pearl w-52 h-32 rounded-xl p-10 flex items-center justify-center flex-col hover:cursor-pointer hover:scale-110 focus:scale-110 text-neutral-800 hover:bg-pictonBlue focus:bg-pictonBlue transition-all duration-300">
        {/* Nombre del empleado */}
        <h3 className="font-bold">{empInfo.name}</h3>

        {/* Salario del empleado */}
        <p>$ {empInfo.salary}</p>
      </div>
    </Link>
  );
};

export default Card;
