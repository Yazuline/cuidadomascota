import { userCuidador, usuarioCuidador } from "../data/users.ts";
import ListCuidadores from "../components/ListCuidadores.jsx";

const Cuidadores = () => {
  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto mt-[5rem]">
      <div className="text-center p-8 leading-10">
        <h2 className="h2 animate-translateText">Cuidadores de Mascotas</h2>
        <p className="leading-6 mt-3">
          Conoce los servicios y precios que ofrecen, así como su ubicación y
          condiciones
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 my-7">
        {usuarioCuidador.map(
          ({ _id, nombre, urlfoto, barrio, servicio, sobreti }) => (
            <div key={_id}>
              <ListCuidadores
                _id={_id}
                nombre={nombre}
                urlfoto={urlfoto}
                barrio={barrio}
                servicio={servicio}
                sobreti={sobreti}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Cuidadores;
