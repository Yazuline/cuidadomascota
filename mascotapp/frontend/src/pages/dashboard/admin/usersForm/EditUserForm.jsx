import React, { useEffect } from "react";
import {
  FieldForm,
  InputForm,
  LabelForm,
  SelectForm,
} from "../../../../styles/CuidadorRegistroStyled";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { deleteUsuario, editUsuario, getUsuarioById } from "../../../../services/serviceUsuario";
import Swal from "sweetalert2";

const EditUserForm = ({ userData, onClick }) => {
  console.log("Llega hasta el formulario");
  const actualizarUsuario = async (values) => {
    console.log(values);
    await editUsuario(values._id,values)

  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: userData,
    onSubmit: actualizarUsuario,
  });

  const eliminarUsuario = async (id) => {
    try {
      console.log("Cliente eliminado", id);
      const response = await deleteUsuario(id);
      console.log(response);
      window.location.href = "/dashboard-admin";
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  useEffect(() => {
    console.log("Acá iría el ID", userData._id);
  }, [userData]);

  return (
    <>
      <button onClick={onClick} className="absolute right-10">
        <IoClose size="2rem" />
      </button>

      <h3 className="h3">Modificar Cliente</h3>
      <form action="" className="py-10" onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-1 lg:grid-cols-2 items-center gap-9 w-fit mx-auto">
          <FieldForm>
            <LabelForm htmlFor="nombre">Nombre</LabelForm>
            <InputForm
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="apellido">Apellido</LabelForm>
            <InputForm
              type="text"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="documento">Documento (DNI)</LabelForm>
            <InputForm
              type="number"
              name="documento"
              value={values.dni}
              onChange={handleChange}
              placeholder="Ingresa tu número de documento"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="correo">Correo</LabelForm>
            <InputForm
              type="email"
              name="correo"
              onChange={handleChange}
              value={values.email}
              placeholder="Ingresa tu correo"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="clave">Contraseña</LabelForm>
            <InputForm
              type="password"
              name="clave"
              onChange={handleChange}
              value={values.password}
              placeholder="Ingresa tu contraseña"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="telefono">Teléfono</LabelForm>
            <InputForm
              type="number"
              name="telefono"
              onChange={handleChange}
              value={values.telefono}
              placeholder="Ingresa tu número de teléfono"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="domicilio">Domicilio</LabelForm>
            <InputForm
              type="text"
              name="domicilio"
              onChange={handleChange}
              value={values.domicilio}
              placeholder="Calle - número / Piso"
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="servicio">Servicio</LabelForm>
            <SelectForm
              name="servicio"
              onChange={handleChange}
              value={values.servicio}
            >
              <option value="" disabled>
                Selecciona tu servicio
              </option>
              <option value="Baños">Baños</option>
              <option value="Paseos">Paseos</option>
              <option value="Peluqueria">Peluqueria</option>
              <option value="Guarderia">Guarderia</option>
              <option value="Supervision 24/7">Supervision 24/7</option>
              <option value="Otros">Otros</option>
            </SelectForm>
          </FieldForm>
        </fieldset>
        <div className="w-full flex justify-between">
          <button
            onClick={() => eliminarUsuario(userData._id)}
            type="button"
            className="px-4 py-2 flex items-center gap-3 bg-red-700 text-white rounded-md text-end mt-10 hover:shadow-lg"
          >
            <MdDelete />
            Eliminar Cliente
          </button>

          <button
            type="submit"
            className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md text-end mt-10 "
          >
            Modificar
          </button>
        </div>
      </form>
    </>
  );
};

export default EditUserForm;
