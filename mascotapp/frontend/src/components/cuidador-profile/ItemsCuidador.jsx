import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiScissors } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";

const ItemsCuidador = () => {
  return (
    <div className="hidden sm:flex justify-around ">
      <div className="flex flex-col items-center gap-3">
        <IoLocationOutline size="3rem" />
        <p className="text-center text-sm sm:text-md">Buenos Aires</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MdOutlineAttachMoney size="3rem" />
        <p className="text-center text-sm sm:text-md">Desde los 10.000 ARS</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <PiScissors size="3rem" />
        <p className="text-center text-sm sm:text-md">Peluqueria Básica</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <MdOutlineCalendarMonth size="3rem" />
        <p className="text-center text-sm sm:text-md">
          Lunes a Sábado de 10 a 20 hrs
        </p>
      </div>
    </div>
  );
};

export default ItemsCuidador;
