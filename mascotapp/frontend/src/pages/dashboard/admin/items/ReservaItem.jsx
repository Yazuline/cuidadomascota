import { useEffect, useState } from "react";
import DetailUserReserva from "../../DetailUserReserva";
// import { userReserva } from "../../UsuariosEjemplo";
import { getReservas } from "../../../../services/serviceReserva";
import { formatDate } from "./utils";
// import { getUsuarioById } from "../../../../services/serviceUsuario";

const ReservaItem = () => {
  const [reservas, setReservas] = useState([]);
  const default_image = "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/02/27/63fcd4aa6a8d6.jpeg"

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const reservasData = await getReservas();
        setReservas(reservasData);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };
    
    
    fetchReservas();
  }, []);
  console.log(reservas);


  return (
    <article className="absolute h-[100vh] top-0 w-[70rem]">
      {/* <CuidadorDash /> */}
      <section className="h-[100vh] flex flex-col justify-center">
        <div className="lg:max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-6 mb-5 bg-slate-200 py-5 ps-[6rem] rounded-md">
            <p>Imagen</p>
            <p>Nombre</p>
            <span>Precio</span>
            <p>Servicio</p>
            <p>Fecha</p>
            <p>Estado</p>
          </div>
          <div className="flex flex-col mx-auto lg:max-w-7xl bg-slate-200 p-10 rounded-xl gap-4 h-[65vh] overflow-hidden overflow-y-scroll">
            {reservas.map((reserva) => (
              <div key={reserva._id}>
                <DetailUserReserva
                  id={reserva._id}
                  imagen={reserva.usuarioId.urlfoto || default_image}//si no hay imagen, poner esta por defecto default_image
                  nombre={reserva.usuarioId.nombre}
                  apellido={reserva.usuarioId.apellido}
                  precio={reserva.precioDelServicio}
                  servicio={reserva.servicio}
                  fecha={formatDate(reserva.fechaDelServicio)}
                  estado={reserva.estado}
                  rolUsuario="administrador"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ReservaItem;
