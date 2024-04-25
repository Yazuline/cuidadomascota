import DetailUsers from "../../DetailUsers";
import EditUser from "../usersForm/EditUser";
// import { usersAll } from "../../UsuariosEjemplo";
import TitlesPanel from "../otros/TitlesPanel";
import { useEffect, useState } from "react";
import { getUsuarios } from "../../../../services/serviceUsuario";
import { formatDate } from "./utils";

const ClientItem = () => {
  // Filtramos el usuario por el rol cuidador 
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const usuariosData = await getUsuarios();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchReservas();
  }, []);
  const clientes = usuarios.filter((user) => user.role === "cliente");
  // const clientes = usersAll.filter((user) => user.rol === "cliente");
  console.log(clientes)

  return (
    <div className="absolute h-[100vh] top-0 w-[100%] lg:w-[70rem]">
      <div className="h-[100vh] flex flex-col justify-center">
        <div className="lg:max-w-7xl mx-auto w-full">
          <TitlesPanel />
          <div className="flex flex-col mx-auto lg:max-w-7xl bg-slate-200 p-10 rounded-xl gap-4 h-[65vh] overflow-hidden overflow-y-scroll">
            {/* Render de CLIENTES */}
            {clientes.map(
              ({
                _id,
                nombre,
                apellido,
                createdAt,
                domicilio,
                telefono,
                email,
                monto,
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
                    monto={monto}
                    modificar={<EditUser id={_id}  role ={role} />} //Acá paso por props el _id
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

export default ClientItem;
