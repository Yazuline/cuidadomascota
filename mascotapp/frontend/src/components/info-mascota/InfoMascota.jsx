import { PerfilMascota } from "../perfil-mascota/PerfilMascota";
import {getMascotaById} from "../../services/serviceMascota";
import { useEffect, useState } from "react";

export const InfoMascota = () => {
  const userId = localStorage.getItem("userId");
  const [userData, setData] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      try{
        const res = await getMascotaById(userId);
        setData(res);
        
      } catch(error) {
        console.log("ERROR: ", error.message);
      }
    }

    handleData();
  }, []);

  return (
    <div className="mt-[8rem] p-5">
        {userData && (
          <div>
            <h2 className="h2 text-[8vmin] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem]">Información {userData.nombre}</h2>
            <PerfilMascota 
            isVisible={false} 
            textClass="text-[1.5rem]"
            petImg="/mascota.jpg"
            petDesc={userData.personalidad}
            />
          </div>
        )}
        <div className="flex justify-end mt-[2rem]">
            <button className="bg-[#273176] w-[15rem] p-2 text-[#ffff] rounded-md hover:bg-[#525c9e] transition ease-in-out duration-1000">Ver documentos</button>
        </div>
    </div>
  )
}
