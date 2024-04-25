import { Link } from "react-router-dom";

const DetailUsers = ({
  id,
  nombre,
  apellido,
  fechaRegistro,
  domicilio,
  correo,
  telefono,
  monto,
  modificar,
}) => {

  const shortenedId = typeof id === 'string' ? id.substring(id.length - 4) : id;

  return (
    <div className="p-5 flex flex-col lg:flex-row items-center justify-between py-4 rounded-xl w-full shadow-md bg-white">
      <div className="w-full md:w-auto mb-2 md:mb-0 md:mr-4  text-center ">
        <Link to={`/detail-user/${id}`} className="block text-center text-blue-500">
          ...{shortenedId}
        </Link>
      </div>
      <p>{nombre} {apellido}</p>
      <p>{fechaRegistro}</p>
      <p>{domicilio}</p>
      <p>{telefono}</p>
      <p>{correo}</p>
      <p>{monto ? '$'+monto : "N/A"}</p>
      <div>{modificar}</div>
    </div>
  );
};

export default DetailUsers;
