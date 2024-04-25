import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AgendarServicio from "./AgendarServicio";
import ModificarPerfil from "./ModificarPerfil";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //width: "90%", // Cambiado a porcentaje
  maxWidth: 400, // Agregado un maxWidth para limitar el tamaño máximo en pantallas grandes
  maxHeight: 600,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 1026px)": {
    // Media query para pantallas más grandes
    overflow: "auto",
  },
  "@media (min-width: 768px)": {
    // Media query para pantallas más grandes
    minWidth: 400,
  },
  "@media (max-width: 567px)": {
    // Media query para pantallas más grandes
    minWidth: "90%",
  },
  "@media (min-width: 1024px)": {
    // Media query para pantallas aún más grandes
    maxWidth: 700,
  },
};

//& Parametros que necesitamos para renderizar el perfil y modificar su perfil
const ModalButton = ({
  usuarioAutenticado, //Pasar por parametro el id del usuario
  _id,
  servicio,
  precioservicio,
  nombre,
  apellido,
  urlfoto,
  telefono,
  email,
  barrio,
  sobreti,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const esCuidadorDelPerfil =
    usuarioAutenticado && usuarioAutenticado._id === _id;

  return (
    <div>
      <button
        onClick={handleOpen}
        className="text-white bg-color-3 py-2 px-4 rounded-md duration-200 hover:shadow-xl"
      >
        {/*Aplicar condición si es propietario del perfil que pueda mostrar: */}
        {!esCuidadorDelPerfil ? "Reservar" : "Modificar Perfil"}
      </button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          {/*Aplicar condición si es propietario del perfil que pueda mostrar: */}
          {!esCuidadorDelPerfil ? (
            <AgendarServicio
              _id={_id}
              servicio={servicio}
              precioservicio={precioservicio}
              nombre={nombre}
            />
          ) : (
            <ModificarPerfil
              _id={_id}
              nombre={nombre}
              apellido={apellido}
              urlfoto={urlfoto}
              telefono={telefono}
              email={email}
              barrio={barrio}
              sobreti={sobreti}
              servicio={servicio}
              precioservicio={precioservicio}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalButton;
