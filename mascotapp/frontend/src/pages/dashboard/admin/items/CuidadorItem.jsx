import DetailUsers from "../../DetailUsers";
import EditUser from "../usersForm/EditUser";
// import { usersAll } from "../../UsuariosEjemplo";
import TitlesPanel from "../otros/TitlesPanel";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../../../services/serviceUsuario";
import { formatDate } from "./utils";

const CuidadorItem = () => {
  
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosData = await getUsuarios();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);
  // Filtramos el usuario por el rol cuidador
  const cuidadores = usuarios.filter((user) => user.role === "cuidador");
  // const cuidadores = usersAll.filter((user) => user.rol === "cuidador");
console.log(cuidadores)

  return (
    <div className="absolute h-[100vh] top-0 w-[70rem]">
      <div className="h-[100vh] flex flex-col justify-center">
        <div className="lg:max-w-7xl mx-auto w-full">
          <TitlesPanel />
          <div className="flex flex-col mx-auto lg:max-w-7xl bg-slate-200 p-10 rounded-xl gap-4 h-[65vh] overflow-hidden overflow-y-scroll">
            {/* Render de CUIDADORES */}
            {cuidadores.map(
              ({
                _id,
                nombre,
                apellido,
                createdAt,
                domicilio,
                telefono,
                email,
                precioservicio,
                role
              }) => (
                <div key={_id}>
                  <DetailUsers
                    id={_id}
                    nombre={nombre}
                    apellido={apellido}
                    fechaRegistro={formatDate(createdAt)}
                    domicilio={domicilio}
                    telefono={telefono}
                    correo={email}
                    monto={precioservicio}
                    modificar={<EditUser id={_id} role={role} />}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuidadorItem;
