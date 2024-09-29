import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import EmpPage from "./pages/EmpPage";
import NewEmployeePage from "./pages/NewEmployeePage";
import { Toaster } from "react-hot-toast";

/**
 * Componente principal de la aplicación que define las rutas.
 * Incluye las rutas para la página de inicio, la página de nuevo empleado y la página de detalles del empleado.
 */
function App() {
  return (
    <>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Index />} />

        {/* Ruta para la página de registro de un nuevo empleado */}
        <Route path="/newEmployee" element={<NewEmployeePage />} />

        {/* Ruta para la página de detalles del empleado */}
        <Route path="/:id" element={<EmpPage />} />
      </Routes>

      {/* Componente Toaster para mostrar notificaciones */}
      <Toaster />
    </>
  );
}

export default App;
