import DashBoard from "../components/DashBoard";

/**
 * Componente principal de la página de inicio.
 * Muestra un título y el componente `DashBoard`, que lista los empleados.
 */
const Index = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        {/* Título principal */}
        <h1 className="font-bold m-6">Lista de Empleados</h1>

        {/* Componente DashBoard que contiene la lista de empleados */}
        <DashBoard />
      </div>
    </div>
  );
};

export default Index;
