import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FieldForm,
  InputForm,
  LabelForm,
  SelectForm,
  TextAreaForm,
} from "../styles/CuidadorRegistroStyled";
import Button from "../components/button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import TextError from "../components/text-error/TextError";
import { useState } from "react";
import { addUsuario } from "../services/serviceUsuario";

// Validación teléfono
const phoneRegExr = /\d{10}$/;
// Validación dni
const dniRegExr = /\d{8}$/;

const RegistroCuidador = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const validationSchema1 = Yup.object({
    nombre: Yup.string().trim().required("Ingresa tu nombre. Ej: Jorge"),
    apellido: Yup.string().trim().required("Ingresa tu apellido. Ej: Ramos"),
    documento: Yup.string()
      .matches(dniRegExr, "Número de documento inválido")
      .max(8, "El documento debe tener como máximo 8 caracteres.")
      .required("Ingresa tu número de documento"),
    correo: Yup.string()
      .email("Formato de correo inválido")
      .required("Ingresa tu correo eléctronico"),
    clave: Yup.string().required("Ingresa tu contraseña"),
    telefono: Yup.string()
      .matches(phoneRegExr, "Número de celular inválido")
      .required("Ingresa tu número de teléfono"),
    domicilio: Yup.string().required("Ingresa tu domicilio"),
    ciudad: Yup.string().required("Selecciona tu barrio cercano"),
  });

  const validationSchema2 = Yup.object({
    servicio: Yup.string().required("Selecciona el servicio a ofrecer"),
    precio: Yup.string().required("Ingrese el precio por su servicio"),
    horario: Yup.string().required("Ingrese su horario estimado"),
    descripcion: Yup.string()
      .trim()
      .max(200, "La descripción debe tener como máximo 200 caracteres"),
  });

  const initialValues = {
    nombre: "",
    apellido: "",
    documento: "",
    correo: "",
    clave: "",
    telefono: "",
    domicilio: "",
    ciudad: "",
    servicio: "",
    precio: "",
    horario: "",
    imagenUser: "",
    descripcion: "",
  };

  const formatearUsuario = async (inputFront) => {
    const inputBack = {
      nombre: inputFront.nombre,
      apellido: inputFront.apellido,
      dni: inputFront.documento,
      telefono: inputFront.telefono,
      domicilio: inputFront.domicilio,
      barrio: inputFront.ciudad,
      servicio: inputFront.servicio,
      precioservicio: inputFront.precio,
      horario: inputFront.horario,
      imagenUser: inputFront.imagenUser,
      email: inputFront.correo,
      password: inputFront.clave,
      role: "cuidador",
      sobreti: inputFront.descripcion,
    };
    console.log(inputBack);
    try {
      await addUsuario(inputBack);
      return inputBack;
    } catch (error) {
      console.error("Error al agregar usuario:", error);
      throw error;
    }
  };
  const enviarForm = (values) => {
    // console.log(values);
    formatearUsuario(values);
  };

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const {
    touched,
    handleSubmit,
    handleChange,
    errors,
    values,
    getFieldProps,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: currentPage === 1 ? validationSchema1 : validationSchema2,
    onSubmit: (values, { resetForm }) => {
      if (currentPage === 1) {
        nextPage();
      } else {
        enviarForm(values);
        resetForm();
      }
    },
  });

  return (
    <>
      <div className="containerTitle mt-[7rem] text-center">
        <h1 className="px-5 md:px-0 h5 sm:h4 md:h2">
          Registrate para ser cuidador!
        </h1>
      </div>
      {currentPage === 1 && (
        <form action="" className="py-10" onSubmit={handleSubmit}>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 items-center gap-9 w-fit mx-auto">
            <FieldForm>
              <LabelForm htmlFor="nombre">
                Nombre <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
                error={touched.nombre && errors.nombre}
                {...getFieldProps("nombre")}
                placeholder="Ingresa tu nombre"
              />
              {touched.nombre && errors.nombre && (
                <TextError>{errors.nombre}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="apellido">
                Apellido <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="apellido"
                onChange={handleChange}
                value={values.apellido}
                error={touched.apellido && errors.apellido}
                {...getFieldProps("apellido")}
                placeholder="Ingresa tu apellido"
              />
              {touched.apellido && errors.apellido && (
                <TextError>{errors.apellido}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="documento">
                Documento (DNI) <span>*</span>
              </LabelForm>
              <InputForm
                type="number"
                name="documento"
                onChange={handleChange}
                value={values.documento}
                error={touched.documento && errors.documento}
                {...getFieldProps("documento")}
                placeholder="Ingresa tu número de documento"
              />
              {touched.documento && errors.documento && (
                <TextError>{errors.documento}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="correo">
                Correo <span>*</span>
              </LabelForm>
              <InputForm
                type="email"
                name="correo"
                onChange={handleChange}
                value={values.correo}
                error={touched.correo && errors.correo}
                {...getFieldProps("correo")}
                placeholder="Ingresa tu correo"
              />
              {touched.correo && errors.correo && (
                <TextError>{errors.correo}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="clave">
                Contraseña <span>*</span>
              </LabelForm>
              <InputForm
                type="password"
                name="clave"
                onChange={handleChange}
                value={values.clave}
                error={touched.clave && errors.clave}
                {...getFieldProps("clave")}
                placeholder="Ingresa tu contraseña"
              />
              {touched.clave && errors.clave && (
                <TextError>{errors.clave}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="telefono">
                Teléfono <span>*</span>
              </LabelForm>
              <InputForm
                type="number"
                name="telefono"
                onChange={handleChange}
                value={values.telefono}
                error={touched.telefono && errors.telefono}
                {...getFieldProps("telefono")}
                placeholder="Ingresa tu número de teléfono"
              />
              {touched.telefono && errors.telefono && (
                <TextError>{errors.telefono}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="domicilio">
                Domicilio <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="domicilio"
                onChange={handleChange}
                value={values.domicilio}
                error={touched.domicilio && errors.domicilio}
                {...getFieldProps("domicilio")}
                placeholder="Calle - número / Piso"
              />
              {touched.domicilio && errors.domicilio && (
                <TextError>{errors.domicilio}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="ciudad">
                Barrio <span>*</span>
              </LabelForm>
              <SelectForm
                name="ciudad"
                onChange={handleChange}
                value={values.ciudad}
                {...getFieldProps("ciudad")}
                error={touched.ciudad && errors.ciudad}
              >
                <option value="" disabled>
                  Selecciona tu barrio
                </option>
                <option value="belgrano">Belgrano</option>
                <option value="chacarita">Chacarita</option>
                <option value="colegiales">Colegiales</option>
                <option value="palermo">Palermo</option>
                <option value="nuñez">Nuñez</option>
                <option value="recoleta">Recoleta</option>
              </SelectForm>
              {touched.ciudad && errors.ciudad && (
                <TextError>{errors.ciudad}</TextError>
              )}
            </FieldForm>
          </fieldset>

          <div className="flex mt-10 w-fit mx-auto gap-10 md:gap-[10rem]">
            <Button disabled>
              <span className="px-4 py-2 flex items-center gap-3">
                <FaArrowLeft />
                Volver
              </span>
            </Button>
            <button
              type="submit"
              className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
            >
              Siguiente <FaArrowRight />
            </button>
          </div>
        </form>
      )}

      {currentPage === 2 && (
        <form action="" className="py-10" onSubmit={handleSubmit}>
          <h2 className="h2 text-center my-10 text-color-3">Servicios</h2>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 items-center gap-9 w-fit mx-auto">
            <FieldForm>
              <LabelForm htmlFor="servicio">
                Qué servicios de cuidado ofreces (selecciona 1) <span>*</span>
              </LabelForm>
              <SelectForm
                name="servicio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.servicio}
                error={touched.servicio && errors.servicio}
                {...getFieldProps("servicio")}
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
              {touched.servicio && errors.servicio && (
                <TextError>{errors.servicio}</TextError>
              )}
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="precio">
                Precio del servicio <span>*</span>
              </LabelForm>
              <InputForm
                type="number"
                name="precio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.precio}
                error={touched.precio && errors.precio}
                {...getFieldProps("precio")}
                placeholder="Ej: 10000"
              />
              {touched.precio && errors.precio && (
                <TextError>{errors.precio}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="horario">
                Horarios de disponibilidad <span>*</span>
              </LabelForm>
              <SelectForm
                name="horario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.horario}
                error={touched.horario && errors.horario}
                {...getFieldProps("horario")}
              >
                <option value="" disabled>
                  Selecciona tu horario
                </option>
                <option value="mañana">Mañana</option>
                <option value="tarde">Tarde</option>
                <option value="dia-completo">Todo el dia</option>
              </SelectForm>
              {touched.horario && errors.horario && (
                <TextError>{errors.horario}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="imagenUser">
                Sube tu imagen de perfil <span>*</span>
              </LabelForm>
              <InputForm
                type="file"
                accept="image/*"
                name="imagenUser"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imagenUser}
                {...getFieldProps("imagenUser")}
              />
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="descripcion">
                Cuéntanos un poco sobre ti <span>*</span>
              </LabelForm>
              <TextAreaForm
                type="text"
                rows="4"
                cols="33"
                name="descripcion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descripcion}
                {...getFieldProps("descripcion")}
                placeholder="Ej: Soy una cuidadora de mascotas que ofrece servicios de peluquería básica para perros. Con más de cinco años de experiencia..."
              />
            </FieldForm>
          </fieldset>

          <div className="flex mt-10 w-fit mx-auto gap-10 md:gap-[10rem]">
            <button
              type="button"
              onClick={prevPage}
              className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
            >
              <FaArrowLeft />
              Volver
            </button>
            <button
              type="submit"
              className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
            >
              Enviar <FaArrowRight />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RegistroCuidador;
