import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { FaEdit } from "react-icons/fa";
import EditUserForm from "./EditUserForm";
import { getUsuarioById } from "../../../../services/serviceUsuario";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function EditUser({ id , role }) {
  
  const [open, setOpen] =useState(false);
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    barrio: "",
    dni: "",
    telefono: "",
    email: "",
    password: "",
    servicio: "",
  });

  const handleOpen = async () => {
    console.log("Llega hasta el botón AL dar clicks")

    try {
      // Se carga primero la información del usuario
      const usuarioData = await getUsuarioById(id);
      setUserData(usuarioData);
      console.log(usuarioData);
      setOpen(true);
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <FaEdit />
      </Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* COMPONENTE FORMULARIO */}
          {/* Se pasa la información del usuario al formulario */}
          {userData._id && <EditUserForm userData={userData} onClick={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
}
