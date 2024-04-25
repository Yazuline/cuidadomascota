import React from "react";
import InfoCuidador from "../components/cuidador-profile/InfoCuidador";
import { usuarioCuidador } from "../data/users";
import ItemsCuidador from "../components/cuidador-profile/ItemsCuidador";

//? Componente para modificar el perfil del usuario CUIDADOR
const PerfilCuidador = () => {
  //Logica para que muestre el perfil del cuidador ya logueado mediante su id
  const cuidador = usuarioCuidador.find((cuidador) => cuidador._id === "4");

  return (
    <section className="mt-[10rem] mb-16">
      <h2 className="max-w-sm mx-auto md:max-w-md lg:max-w-lg h3 md:h2 text-center px-2">
        Conoce al próximo cuidador de tu mascota
      </h2>
      <article className="mt-10 md:mt-[5rem] max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-20">
        <div key={cuidador._id} className="mx-auto">
          <InfoCuidador
            _id={cuidador._id}
            nombre={cuidador.nombre}
            apellido={cuidador.apellido}
            urlfoto={cuidador.urlfoto}
            telefono={cuidador.telefono}
            email={cuidador.email}
            barrio={cuidador.barrio}
            sobreti={cuidador.sobreti}
            servicio={cuidador.servicio}
            precioservicio={cuidador.precioservicio}
            usuarioAutenticado={cuidador}
          />
        </div>

        <ItemsCuidador />
      </article>
    </section>
  );
};

export default PerfilCuidador;
