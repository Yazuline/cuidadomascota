import { useFormik } from "formik";
import {
  FieldForm,
  InputForm,
  LabelForm,
} from "../../styles/CuidadorRegistroStyled";

import * as Yup from "yup";
import TextError from "../text-error/TextError";
import SimpleAlert from "./AlertMessage";
import { useState } from "react";

const AgendarServicio = ({ _id, servicio, precioservicio, nombre }) => {
  //Abrir alerta de enviado para informacion de usuario
  const [alertOpen, setAlertOpen] = useState(false);

  const closeModal = () => {
    setAlertOpen(!alertOpen);
    console.log("Cerrado");
  };

  const initialValues = {
    fechaDelServicio: "",
    cuidadorId: _id,
    servicio: servicio,
    precioservicio: precioservicio,
  };

  const validationSchema = Yup.object({
    fechaDelServicio: Yup.date().required("Fecha de servicio requerida"),
  });

  const enviarReserva = (values, { resetForm }) => {
    const { fechaDelServicio, cuidadorId, servicio, precioservicio } = values;

    const fechaActual = new Date();
    const fechaDeCreacion = fechaActual.toISOString();

    const data = {
      usuarioId: "id_del_usuario", //obtemer el id de usuario
      cuidadorId,
      mascotaId: "id_de_mascota", //obtener el id de la mascota
      fechaDelServicio,
      servicio,
      precioservicio,
      estado: "pendiente", //Se enviara el estado
      fechaDeCreacion,
    };

    console.log(data); //Parte backend ⬇️
    setAlertOpen(true);
    resetForm();
  };

  const {
    touched,
    handleSubmit,
    handleChange,
    values,
    errors,
    getFieldProps,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: enviarReserva,
  });

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-5" id={_id}>
          <FieldForm>
            <LabelForm $width="150px">Selecciona el día</LabelForm>
            <InputForm
              $width="300px"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              name="fechaDelServicio"
              onChange={handleChange}
              value={values.fechaDelServicio}
              error={touched.fechaDelServicio && errors.fechaDelServicio}
              {...getFieldProps("fechaDelServicio")}
            />
            {touched.fechaDelServicio && errors.fechaDelServicio && (
              <TextError block>{errors.fechaDelServicio}</TextError>
            )}
          </FieldForm>
          <div className="flex flex-col gap-5 sm:gap-10 sm:flex sm:flex-row justify-center">
            <FieldForm>
              <LabelForm $width="150px">Servicio</LabelForm>
              <span>{servicio}</span>
            </FieldForm>
            <FieldForm>
              <LabelForm $width="80px">Precio</LabelForm>
              <span>${precioservicio}</span>
            </FieldForm>
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="bg-color-3 text-white p-3 rounded-md"
            >
              <a className="px-3 py-2">Reservar Turno</a>
            </button>
          </div>
          <span className="text-center text-gray-400 text-sm">
            ID: #{_id} cuidador
          </span>
        </fieldset>
      </form>
      <SimpleAlert open={alertOpen} onClose={closeModal} nombre={nombre} />
    </>
  );
};

export default AgendarServicio;
