import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Snackbar } from "@mui/material";

export default function SimpleAlert({ open, onClose, nombre }) {
  return (
    <Snackbar
      open={open}
      //autoHideDuration={4000} // Duración en milisegundos antes de que la alerta se oculte automáticamente
      onClose={onClose}
      sx={{ width: "100%" }}
    >
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
        onClose={onClose}
      >
        Tu reserva se envío y esta pendiente por el cuidador: {nombre}
      </Alert>
    </Snackbar>
  );
}
