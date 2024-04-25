import { useEffect, useState } from "react";
import { getMascotas } from "../services/serviceMascota"; // Importa la función para obtener todos los cuidadores

const CuidadoresList = () => {
  const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getMascotas();
      setCuidadores(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
       <br />
       <br />
      <br />
      <h1>Lista de  Mascotas</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>edad</th>
            <th>Vacunas Completas</th>
            {/* Agrega más columnas según los datos de los cuidadores */}
          </tr>
        </thead>
        <tbody>
          {cuidadores.map((cuidador) => (
            <tr key={cuidador._id}>
              <td>{cuidador.nombre}</td>
              <td>{cuidador.raza}</td>
              <td>{cuidador.edad}</td>
              <td>{cuidador.vacunas}</td>
              {/* Agrega más celdas según los datos de los cuidadores */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CuidadoresList;
