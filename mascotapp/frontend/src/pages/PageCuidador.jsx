import { Navigate, useParams } from "react-router-dom";
import InfoCuidador from "../components/cuidador-profile/InfoCuidador";
import ItemsCuidador from "../components/cuidador-profile/ItemsCuidador";
import { usuarioCuidador } from "../data/users";

import { useMemo } from "react";

//Importo la informacion de mis usuarios ejemplos
const getCuidadorById = (_id) => {
  return usuarioCuidador.find((cuidador) => cuidador._id === _id);
};

const PageCuidador = () => {
  const { _id } = useParams();

  const cuidador = useMemo(() => getCuidadorById(_id), [_id]);

  // console.log(cuidador);
  if (!cuidador) {
    return <Navigate to="/cuidadores" />;
  }

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
          />
        </div>

        <ItemsCuidador />
      </article>
    </section>
  );
};

export default PageCuidador;
