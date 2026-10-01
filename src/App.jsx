import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Tabla from "./pages/Tabla";
import Experiencia from "./pages/Experiencia";

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/sumadora">Sumadora</NavLink>
        <NavLink to="/traductor">Traductor</NavLink>
        <NavLink to="/tabla">Tabla</NavLink>
        <NavLink to="/experiencia">Experiencia</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/traductor" element={<Traductor />} />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </>
  );
}