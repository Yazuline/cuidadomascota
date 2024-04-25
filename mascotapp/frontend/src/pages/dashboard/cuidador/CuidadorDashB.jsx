import DetailUserReserva from "../DetailUserReserva";
//import { userReserva } from "../UsuariosEjemplo";
import { getReservas } from "../../../services/serviceReserva";
import { useEffect, useState } from "react";
import moment from 'moment';

const CuidadorDashB = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const res = await getReservas();
      setData(res);
    }
    handleData();
  }, []);

  useEffect(() => {
    if (data !== null){
      console.log(data);
    }
  }, [data]);

  return (
    <section className="h-[100vh] flex flex-col justify-center mt-[5rem] w-[100%] p-5  text-[3vmin] sm:text-[10px] md:text-[10px] lg:text-[15px]">
      <div className="lg:max-w-7xl mx-auto w-full gap-5">
        <h2 className="h2 my-5 text-[8vmin] sm:text-[1.5rem] md:text-[2.5rem]">Historial de reservas</h2>
        <div className="mb-5 flex justify-around bg-slate-200 py-5 px-7 gap-5 rounded-md overflow-y-scroll">
          <p>Imagen</p>
          <p>Nombre</p>
          <span>Precio</span>
          <p>Servicio</p>
          <p>Fecha</p>
          <p>Estado</p>
        </div>
        <div className="flex flex-col mx-auto lg:max-w-7xl bg-slate-200 p-10 rounded-xl gap-4 h-[65vh] overflow-hidden overflow-y-scroll">
        {data.map(({ cuidadorId, precioDelServicio, servicio, fechaDelServicio, estado }, index) => (
        <div key={index}>
          {cuidadorId && (
            <DetailUserReserva
              id={cuidadorId._id}
              imagen="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
              nombre={cuidadorId.nombre}
              apellido={cuidadorId.apellido}
              precio={precioDelServicio}
              servicio={servicio}
              fecha={moment(fechaDelServicio).format('YYYY-MM-DD')}
              estado={estado}
              rolUsuario={"cuidador"}
            />
          )}
        </div>
      ))}
        </div>
      </div>
    </section>
  );
};

export default CuidadorDashB;
