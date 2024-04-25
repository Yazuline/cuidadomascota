import { useEffect, useState } from "react";
import { FigureImg, Imagen } from "./cuidador/cuidadorStyled";
import OptionMenu from "./admin/otros/OptionMenu";
import { editReserva } from "../../services/serviceReserva";

const DetailUserReserva = ({
  id,
  imagen,
  nombre,
  apellido,
  precio,
  servicio,
  fecha,
  estado,
  rolUsuario,
}) => {
  //Manejar el estado inicial de la reserva
  const [estadoReserva, setEstadoReserva] = useState(estado);

  const handleChangeEstado = async (e) => {
    const nuevoEstado = e.target.value;
    setEstadoReserva(nuevoEstado);
    // console.log(nuevoEstado);
    // console.log(id);
    try {
      await editReserva(id, { estado: nuevoEstado });
    } catch (error) {
      console.error("Error al actualizar el estado de la reserva:", error);
    }

  };

  return (
    // <div className="flex bg-white mx-auto justify-around items-center py-4 rounded-xl w-full shadow-md">
    <div className="grid grid-row sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 py-4 text-center items-center rounded-xl shadow-md bg-white">
      <FigureImg>
        <Imagen src={imagen} alt={nombre} />
      </FigureImg>
      <p className="truncate text-center">
        {nombre} {apellido}
      </p>
      <span>${precio}</span>
      <p>{servicio}</p>
      <p>{fecha}</p>

      {/* Mostrar solo para cuidador */}
      {rolUsuario === "cuidador" && (
        <select
          value={estadoReserva}
          onChange={handleChangeEstado}
          className="cursor-pointer w-[50%] text-center m-auto"
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmado">Confirmado</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Completado">Completado</option>
        </select>
      )}

      {/* Mostrar solo para administrador */}

      {rolUsuario === "administrador" && (
        <div className="flex">
          <select
            value={estadoReserva}
            onChange={handleChangeEstado}
            className="cursor-pointer w-[8rem] text-center appearance-none"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Confirmado">Confirmado</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Completado">Completado</option>
          </select>

            <OptionMenu />

        </div>
      )}
    </div>
  );
};

export default DetailUserReserva;
