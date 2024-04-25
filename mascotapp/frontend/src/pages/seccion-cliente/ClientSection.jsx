import { PerfilCliente } from "../../components/perfil-cliente/PerfilCliente";
import { PerfilMascota } from "../../components/perfil-mascota/PerfilMascota";
import { OpinionCard } from "../../components/reseña/OpinionCard";
import { getUsuarioById } from "../../services/serviceUsuario.ts";
import moment from 'moment';
import { useEffect, useState } from "react";
import "./clientStyle.css";

export const ClientSection = () => {
  const [userData, setData] = useState(null);
  const userId = localStorage.getItem("userId");
  //Imagen proporcionada en caso de que la imagen del usuario no exista
  const defaultPhoto = "/user-profile.webp";

  //Carga de datos
  useEffect(() => {
    const handleData = async () => {
      try{
        const res = await getUsuarioById(userId);
        const testImage = new Image();
        testImage.onload = () => {
          setData(res);
        };

        //En caso de que la imagen no haya cargado
        testImage.onerror = () => {
          res.urlfoto = defaultPhoto;
          setData(res);
        };
        testImage.src = res.urlfoto;
        
      } catch(error) {
        console.log("ERROR: ", error.message);
      }
    }

    handleData();
  }, []);

  return (
    <div className="client-section">
        {userData && (
          <div>
            <PerfilCliente 
              urlImagen={userData.urlfoto}
              nombre={userData.nombre}
              mascota={userData.mascota}
              telefono={userData.telefono}
              correo={userData.email}
              fecha={moment(userData.fecha ).format('YYYY')}
            />
            <PerfilMascota 
              petDesc={userData.personalidad}
              petImg="/mascota.jpg"
            />
          </div>
        )}
        <h2>Reseña de cuidadores</h2>
        <OpinionCard />
    </div>
  )
}
