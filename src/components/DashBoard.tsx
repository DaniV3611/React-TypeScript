import { useEffect, useState } from "react";
import { Employee } from "../types/employeeTypes";
import Card from "./Card";
import NewEmployeeBtn from "./NewEmployeeBtn";
import { APIEmployees } from "../types/rerquestTypes";
import { API_URL } from "../config/config";

/**
 * Componente `DashBoard` que muestra una lista de empleados en formato de tarjetas.
 * Incluye un botón para agregar nuevos empleados.
 */
const DashBoard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Función para obtener la lista de empleados desde la API.
   */
  const fetchEmployees = async () => {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) return;
    const data: APIEmployees = await response.json();
    setEmployees(data.employees);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex w-full items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((employee, index) => (
          <Card key={employee.id || index} empInfo={employee} />
        ))}
        <NewEmployeeBtn />
      </div>
    </main>
  );
};

export default DashBoard;
