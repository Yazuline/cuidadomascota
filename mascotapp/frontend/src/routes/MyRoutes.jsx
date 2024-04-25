import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio";
import RegistroCuidador from "../pages/RegistroCuidador";
import { RegistroCliente } from "../pages/RegistroCliente";
import Roles from "../pages/Roles";
import Entrar from "../pages/Entrar";
import Contacto from "../pages/Contacto";
import Ayuda from "../pages/Ayuda";
import CuidadorDashB from "../pages/dashboard/cuidador/CuidadorDashB";
import AdminDashB from "../pages/dashboard/admin/AdminDashB";
import PageCuidador from "../pages/PageCuidador";
import Cuidadores from "../pages/Cuidadores";
import { RegistroMascotas } from "../pages/RegistroMascotas";
import { ClientSection } from "../pages/seccion-cliente/ClientSection";
import { InfoMascota } from "../components/info-mascota/InfoMascota";
import { UserPage } from "../pages/user-page/UserPage";
import PerfilCuidador from "../pages/PerfilCuidador";

const MyRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Navigate to="/inicio" />} />

        <Route path="/cuidadores" element={<Cuidadores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/registrar-como" element={<Roles />} />
        <Route path="/entrar" element={<Entrar />} />

        {/*Registro*/}
        <Route path="/registro-cuidador" element={<RegistroCuidador />} />
        <Route path="/registro-cliente" element={<RegistroCliente />} />
        <Route path="/registro-mascotas" element={<RegistroMascotas />} />

        {/* Dashboard */}
        <Route path="/nuevas-reservas" element={<CuidadorDashB />} />
        <Route path="/dashboard-admin" element={<AdminDashB />} />

        {/* Perfil cuidador desde la vista de cliente*/}
        <Route path="cuidador/:_id" element={<PageCuidador />} />
        {/* Perfil cuidador*/}
        <Route path="/perfil-cuidador" element={<PerfilCuidador />} />

        {/*seccion cliente*/}
        <Route path="/perfil-dueño" element={<ClientSection />} />
        <Route path="/mascota" element={<InfoMascota />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
