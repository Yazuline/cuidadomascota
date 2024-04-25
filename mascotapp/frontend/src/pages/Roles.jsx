import Button from "../components/button/Button";
import imgCuidador from "../assets/ilustraciones/cuidador.png";
import imgDuenio from "../assets/ilustraciones/duenio.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Roles = () => {
  return (
    <section className="mt-[8rem]  lg:max-w-6xl m-auto">
      <h1 className="h1 text-center px-4">Selecciona tu perfil deseado</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-14 gap-9 px-5">
        <article className="py-7 px-8 bg-green-900 text-white rounded-3xl">
          <h2 className="h5">Cuidador de mascota</h2>
          <p className="mt-2 pb-5 font-light">
            Como <span className="font-semibold">cuidador</span> tendrás la
            oportunidad de generar ingresos mientras ofrecer tus servicios de
            cuidado, peluquería baño o paseos a mascotas que estén dentro de tu
            zona.
          </p>
          <Button border>
            <a
              href="/registro-cuidador"
              className="animate-translateText text-color-1 px-5 py-2 transition-all hover:scale-105 bg-white rounded-lg"
            >
              <FaArrowRightLong />
            </a>
          </Button>
          <figure className="w-full">
            <img
              src={imgCuidador}
              alt="Ilustración cuidador"
              width="300px"
              className="mx-auto"
            />
          </figure>
        </article>
        <article className="py-7 px-8 bg-blue-900 text-white rounded-3xl">
          <h2 className="h5">Dueño de mascota</h2>
          <p className="mt-2 pb-5 font-light">
            Como <span className="font-semibold">dueño</span> tendrás la
            oportunidad de agendar servicios de cuidado, peluquería baño o
            paseos para tu mascota/s por parte de cuidadores certificados.
          </p>
          <Button border>
            <a
              href="/registro-cliente"
              className="animate-translateText text-color-1 px-5 py-2 transition-all hover:scale-105 bg-white rounded-lg"
            >
              <FaArrowRightLong />
            </a>
          </Button>
          <figure className="w-full">
            <img
              src={imgDuenio}
              alt="Ilustración cuidador"
              width="300px"
              className="mx-auto"
            />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Roles;
