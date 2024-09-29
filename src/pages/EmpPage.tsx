import { useNavigate, useParams } from "react-router-dom";
import { APIGetEmployee } from "../types/rerquestTypes";
import { useEffect, useState } from "react";
import { Employee } from "../types/employeeTypes";
import toast from "react-hot-toast";
import { API_URL } from "../config/config";

/**
 * Página de empleado que muestra y permite editar o eliminar información del empleado.
 */
const EmpPage = () => {
  // Obtener el parámetro 'id' de la URL
  const { id } = useParams<{ id: string }>();

  // Estado para almacenar los datos del empleado
  const [employee, setEmployee] = useState<Employee | null>(null);

  // Hook para navegar entre rutas
  const navigate = useNavigate();

  /**
   * Función para obtener la información de un empleado por su ID.
   * @param {string} id - ID del empleado a buscar
   */
  const fetchEmployeeInfo = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) return;

    const data: APIGetEmployee = await response.json();
    if (data.employee !== null) setEmployee(data.employee);
  };

  /**
   * Función para editar la información del empleado.
   * @param {string | undefined} id - ID del empleado
   * @param {string} toastId - ID de la notificación de 'react-hot-toast'
   */
  const editEmployee = async (id: string | undefined, toastId: string) => {
    if (id === undefined) {
      toast.error("No fue posible modificar la información del empleado", {
        id: toastId,
      });
      return;
    }

    // Obtener los valores de los campos de entrada
    const nameInput = document.getElementById("nombreEmp") as HTMLInputElement;
    const salaryInput = document.getElementById(
      "salarioEmp"
    ) as HTMLInputElement;

    // Validar que el campo de nombre no esté vacío
    if (!nameInput.value) {
      toast.error("Digite el nombre del empleado", { id: toastId });
      return;
    }

    // Crear objeto Employee con los datos actualizados
    const empInfo: Employee = {
      name: nameInput.value,
      salary: Number(salaryInput.value),
    };

    // Enviar la solicitud PUT para actualizar el empleado
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empInfo),
    });

    // Manejar la respuesta
    if (!response.ok) {
      toast.error("No fue posible modificar la información del empleado", {
        id: toastId,
      });
      return;
    }

    const { message } = await response.json();
    toast.success(message, { id: toastId });

    // Redirigir a la página principal después de 2 segundos
    setTimeout(() => {
      navigate(`/`);
    }, 2000);
  };

  /**
   * Función para eliminar un empleado.
   * @param {string | undefined} id - ID del empleado
   * @param {string} toastId - ID de la notificación de 'react-hot-toast'
   */
  const deleteEmployee = async (id: string | undefined, toastId: string) => {
    if (id === undefined) {
      toast.error("No fue posible eliminar la información del empleado", {
        id: toastId,
      });
      return;
    }

    // Enviar la solicitud DELETE para eliminar al empleado
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      toast.error("No fue posible eliminar la información del empleado", {
        id: toastId,
      });
    } else {
      const { message } = await response.json();
      toast.success(message, { id: toastId });

      // Redirigir a la página principal después de 2 segundos
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  // Obtener la información del empleado cuando el componente se monta
  useEffect(() => {
    if (id !== undefined) fetchEmployeeInfo(id);
  }, [id]);

  return (
    <div className="flex items-center justify-center w-full flex-col">
      {!employee && (
        <h2 className="font-bold text-2xl m-4">Empleado no encontrado</h2>
      )}
      {employee && (
        <>
          {/* Campo para editar el nombre del empleado */}
          <p className="font-bold">Nombre</p>
          <input
            id="nombreEmp"
            className="border-pearl focus:border-pictonBlue focus:scale-110 duration-300"
            defaultValue={employee.name}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const toastId = toast.loading("Guardando...");
                editEmployee(id, toastId);
              }
            }}
          />

          {/* Campo para editar el salario del empleado */}
          <p className="font-bold mt-4">Salario</p>
          <input
            id="salarioEmp"
            type="number"
            className="border-pearl focus:border-pictonBlue focus:scale-110 duration-300"
            defaultValue={employee.salary}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const toastId = toast.loading("Guardando...");
                editEmployee(id, toastId);
              }
            }}
          />

          <footer className="mt-4">
            {/* Botón para guardar los cambios */}
            <button
              className="mr-4 bg-pearl font-bold text-neutral-800 transition-all hover:bg-pictonBlue hover:text-black hover:scale-90 focus:bg-pictonBlue focus:text-black focus:scale-90 duration-300"
              onClick={() => {
                const toastId = toast.loading("Guardando...");
                editEmployee(id, toastId);
              }}
            >
              Guardar
            </button>

            {/* Botón para eliminar el empleado */}
            <button
              className="font-bold text-pearl border-2 rounded-md border-pearl hover:text-lightRed hover:border-lightRed hover:scale-90 focus:text-lightRed focus:border-lightRed focus:scale-90 transition-all duration-300"
              onClick={() => {
                const toastId = toast.loading("Eliminando...");
                deleteEmployee(id, toastId);
              }}
            >
              Eliminar
            </button>
          </footer>
        </>
      )}
    </div>
  );
};

export default EmpPage;
