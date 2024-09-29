import toast from "react-hot-toast";
import { Employee } from "../types/employeeTypes";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";

/**
 * Página para registrar un nuevo empleado.
 */
const NewEmployeePage = () => {
  // Hook de navegación para redirigir después de registrar el empleado
  const navigate = useNavigate();

  /**
   * Función para registrar un nuevo empleado.
   * @param {string} toastId - ID de la notificación de 'react-hot-toast'
   */
  const registrarEmpleado = async (toastId: string) => {
    // Obtener los valores de los campos de entrada
    const nameInput = document.getElementById("nombreEmp") as HTMLInputElement;
    const salaryInput = document.getElementById(
      "salarioEmp"
    ) as HTMLInputElement;

    // Validar que el campo de nombre no esté vacío
    if (!nameInput.value) {
      toast.error("Digite el nombre del empleado", {
        id: toastId,
      });
      return;
    }

    // Crear objeto Employee con los datos proporcionados
    const empInfo: Employee = {
      name: nameInput.value,
      salary: Number(salaryInput.value),
    };

    // Enviar la solicitud POST para registrar al empleado
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empInfo),
    });

    // Manejar la respuesta
    if (!response.ok) {
      toast.error("No fue posible registrar el empleado", {
        id: toastId,
      });
      return;
    }

    // Mostrar éxito y redirigir a la página principal después de 2 segundos
    const { message } = await response.json();
    toast.success(message, {
      id: toastId,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h2 className="font-bold text-2xl m-4">Registrar Empleado</h2>

      {/* Campo para ingresar el nombre del empleado */}
      <p className="font-bold">Nombre</p>
      <input
        id="nombreEmp"
        className="border-pearl focus:border-pictonBlue focus:scale-110 duration-300"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const toastId = toast.loading("Guardando...");
            registrarEmpleado(toastId);
          }
        }}
      />

      {/* Campo para ingresar el salario del empleado */}
      <p className="font-bold mt-4">Salario</p>
      <input
        id="salarioEmp"
        type="number"
        className="border-pearl focus:border-pictonBlue focus:scale-110 duration-300"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const toastId = toast.loading("Guardando...");
            registrarEmpleado(toastId);
          }
        }}
      />

      <footer className="mt-4">
        {/* Botón para guardar los datos del nuevo empleado */}
        <button
          className="mr-4 bg-pearl font-bold text-neutral-800 transition-all hover:bg-pictonBlue hover:text-black hover:scale-90 focus:bg-pictonBlue focus:text-black focus:scale-90 duration-300"
          onClick={() => {
            const toastId = toast.loading("Guardando...");
            registrarEmpleado(toastId);
          }}
        >
          Guardar
        </button>
      </footer>
    </div>
  );
};

export default NewEmployeePage;
