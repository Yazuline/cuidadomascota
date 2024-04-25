import {
    FieldForm,
    InputForm,
    LabelForm,
    SelectForm,
  } from "../styles/CuidadorRegistroStyled";
  import Button from "../components/button/Button";
  import { FaArrowRight } from "react-icons/fa6";
  import { FaArrowLeft } from "react-icons/fa6";
  import { MessageBox } from "../styles/CuidadorRegistroStyled";
  import * as Yup from "yup"; 
import { useFormik } from "formik";
import TextError from "../components/text-error/TextError";
import { addUsuario } from "../services/serviceUsuario";
import Swal from 'sweetalert2';


// Validación teléfono
const phoneRegExr = /\d{10}$/;
// Validación dni
const dniRegExr = /\d{8}$/;

export const RegistroCliente = () => {
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
      descripcion: Yup.string().trim(),
    });


    const initialValues = {
      nombre: "",
      apellido: "",
      clave: "",
      domicilio: "",
      ciudad: "",
      documento: "",
      telefono: "",
      correo: "",
      descripcion: "",
    };

    const formatearUsuario = async (inputFront) => {
      const inputBack = {
        nombre: inputFront.nombre,
        apellido: inputFront.apellido,
        domicilio: inputFront.domicilio,
        barrio: inputFront.ciudad,
        dni: inputFront.documento,
        telefono: inputFront.telefono,
        email: inputFront.correo,
        password: inputFront.clave,
        role: "cliente",
        sobreti: inputFront.descripcion,
      };

      console.log(inputBack);

      try {
        await addUsuario(inputBack);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Tu registro ha sido completado satisfactoriamente!',
        });
        return inputBack;
        

      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Registro no exitoso',
          text: '¡Hubo un error durante el registro. Inténtalo de nuevo más tarde!',
        });
        throw error;
      }
    }
    
    const enviarForm = (values) => {
      console.log(values);
      formatearUsuario(values);
    };

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
      validationSchema: validationSchema1,
      onSubmit: (values, { resetForm }) => {
        enviarForm(values);
        resetForm();
      },
    });

    return (
        <>
          <div className="containerTitle mt-[7rem] text-center">
            <h1 className="px-5 md:px-0 h5 sm:h4 md:h2">
              ¡Bienvenido/a!
            </h1>
          </div>
            <form action="" className="py-10" onSubmit={handleSubmit}>
            <fieldset className="flex flex-col items-center gap-[3rem] w-fit mx-auto lg:flex-row">
             <div className="p-5">
              <FieldForm className="mb-[2rem]">
                <LabelForm htmlFor="nombre">
                  Nombre <span>*</span>
                </LabelForm>
                <InputForm
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nombre}
                  error={touched.nombre && errors.nombre}
                  {...getFieldProps("nombre")}
                  placeholder="Ingresa tu nombre"
                />
                {touched.nombre && errors.nombre && (
                  <TextError>{errors.nombre}</TextError>
                )}
              </FieldForm>

              <FieldForm className="mb-[2rem]">
                <LabelForm htmlFor="apellido">
                  Apellido <span>*</span>
                </LabelForm>
                <InputForm
                  type="text"
                  name="apellido"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apellido}
                  error={touched.apellido && errors.apellido}
                  {...getFieldProps("apellido")}
                  placeholder="Ingresa tu apellido"
                />
                {touched.apellido && errors.apellido && (
                  <TextError>{errors.apellido}</TextError>
                )}
              </FieldForm>

              <FieldForm className="mb-[2rem]">
                <LabelForm htmlFor="passwd">
                  Contraseña <span>*</span>
                </LabelForm>
                <InputForm
                  type="password"
                  name="clave"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.clave}
                  error={touched.clave && errors.clave}
                  {...getFieldProps("clave")}
                  placeholder="Ingresa tu contraseña"
                />
                {touched.clave && errors.clave && (
                  <TextError>{errors.clave}</TextError>
                )}
              </FieldForm>

              <FieldForm className="mb-[2rem]">
                <LabelForm htmlFor="domicilio">
                  Domicilio <span>*</span>
                </LabelForm>
                <InputForm
                  type="text"
                  name="domicilio"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.domicilio}
                  error={touched.domicilio && errors.domicilio}
                  {...getFieldProps("domicilio")}
                  placeholder="Ingresa tu dirección"
                />
                {touched.domicilio && errors.domicilio && (
                  <TextError>{errors.domicilio}</TextError>
                )}
              </FieldForm>

              <FieldForm>
                <LabelForm htmlFor="ciudad">
                  Ciudad <span>*</span>
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
                  <option value="nuniez">Nuñez</option>
                  <option value="recoleta">Recoleta</option>
                </SelectForm>
              </FieldForm>
            </div>
            <div className="lg:mt-0">
              <FieldForm className="mt-[-40px] lg:mt-[-50px] mb-[2rem]">
                <LabelForm htmlFor="dni">
                  Documento (DNI) <span>*</span>
                </LabelForm>
                <InputForm
                  type="number"
                  name="documento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.documento}
                  error={touched.documento && errors.documento}
                  {...getFieldProps("documento")}
                  placeholder="Ingresa tu número de documento"
                />
                {touched.documento && errors.documento && (
                  <TextError>{errors.documento}</TextError>
                )}
              </FieldForm>

                <FieldForm className="mb-[2rem]">
                  <LabelForm htmlFor="telefono">
                    Teléfono <span>*</span>
                  </LabelForm>
                  <InputForm
                    type="number"
                    name="telefono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telefono}
                    error={touched.telefono && errors.telefono}
                    {...getFieldProps("telefono")}
                    placeholder="Ingresa tu número de teléfono"
                  />
                  {touched.telefono && errors.telefono && (
                     <TextError>{errors.telefono}</TextError>
                  )}
                </FieldForm>
      
                <FieldForm className="mb-[2rem]">
                  <LabelForm htmlFor="correo">
                    Correo <span>*</span>
                  </LabelForm>
                  <InputForm
                    type="email"
                    name="correo"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  <LabelForm htmlFor="descripcion">
                    Cuéntanos un poco sobre ti <span>*</span>
                  </LabelForm>
                  <MessageBox
                    name="descripcion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.descripcion}
                    error={touched.descripcion && errors.descripcion}
                    {...getFieldProps("descripcion")}
                    placeholder="Descripción"
                    rows="4"
                    cols="50"
                  />
                  {touched.descripcion && errors.descripcion && (
                     <TextError>{errors.descripcion}</TextError>
                  )}
                </FieldForm>
              </div>
            </fieldset>
            <div className="flex mt-10 w-fit mx-auto gap-[4rem] lg:gap-[38rem] sm:gap-[10rem] px-5">
              <Button disabled>
                <span className="px-4 py-2 flex items-center gap-3">
                  <FaArrowLeft />
                  Volver
                </span>
              </Button>
              <button type="submit" className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md">
                  Enviar <FaArrowRight />
              </button>
            </div>
          </form>
        {/*{currentPage === 2 && (
        <form action="" className="py-10" onSubmit={handleSubmit}>
          <h2 className="h2 text-center my-10 text-color-3">
            Datos de mascotas
          </h2>
          <fieldset className="grid grid-cols-1 lg:grid-cols-2 items-center gap-9 w-fit mx-auto">
            <FieldForm>
              <LabelForm htmlFor="horario">
                Nombre <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="mascota"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mascota}
                error={touched.mascota && errors.mascota}
                {...getFieldProps("mascota")}
                placeholder="Ej: Cookie"
              />
              {touched.mascota && errors.mascota && (
                <TextError>{errors.mascota}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="raza">
                Raza <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="raza"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.raza}
                error={touched.raza && errors.raza}
                {...getFieldProps("raza")}
                placeholder="Ej: Doberman"
              />
              {touched.raza && errors.raza && (
                <TextError>{errors.raza}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="fecha">
                Fecha de nacimiento <span>*</span>
              </LabelForm>
              <InputForm
                type="date"
                name="fecha"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fecha}
                error={touched.fecha && errors.fecha}
                {...getFieldProps("fecha")}
              />
              {touched.fecha && errors.fecha && (
                <TextError>{errors.fecha}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="peso">
                Peso <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="peso"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.peso}
                error={touched.peso && errors.peso}
                {...getFieldProps("peso")}
                placeholder="Ej: 25kg"
              />
              {touched.peso && errors.peso && (
                <TextError>{errors.peso}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="enfermedad">
                ¿Tiene algunas enfermedad crónica? <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="enfermedad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.enfermedad}
                error={touched.enfermedad && errors.enfermedad}
                {...getFieldProps("enfermedad")}
                placeholder="Ej: Sí, tiene..."
              />
              {touched.enfermedad && errors.enfermedad && (
                <TextError>{errors.enfermedad}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="medicamento">
                ¿Toma algún medicamento?¿Cuál? <span>*</span>
              </LabelForm>
              <InputForm
                type="text"
                name="medicamento"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.medicamento}
                error={touched.medicamento && errors.medicamento}
                {...getFieldProps("medicamento")}
                placeholder="Ej: Sí, toma..."
              />
              {touched.medicamento && errors.medicamento && (
                <TextError>{errors.medicamento}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="personalidad">
                ¿Cuál es la personalidad de tu perro? Cuéntanos <span>*</span>
              </LabelForm>
              <TextAreaForm
                type="text"
                rows="4"
                cols="33"
                name="personalidad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.personalidad}
                {...getFieldProps("personalidad")}
                placeholder="Ej: Es amable, le gusta jugar y..."
              />
            </FieldForm>

            <FieldForm>
              <LabelForm htmlFor="vacunas">
                ¿Cuenta con todas sus vacunas? <span>*</span>
              </LabelForm>
              <SelectForm
                name="vacunas"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vacunas}
                error={touched.vacunas && errors.vacunas}
                {...getFieldProps("vacunas")}
              >
                <option value="" disabled>
                  Seleccione
                </option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </SelectForm>
              {touched.vacunas && errors.vacunas && (
                <TextError>{errors.vacunas}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="cartilla">
                Cartilla de vacunación <span>*</span>
              </LabelForm>
              <InputForm
                type="file"
                accept="image/*"
                name="cartilla"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cartilla}
                {...getFieldProps("cartilla")}
              />
              {touched.cartilla && errors.cartilla && (
                <TextError>{errors.cartilla}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="recetas">
                Recetas médicas <span>*</span>
              </LabelForm>
              <InputForm
                type="file"
                accept="image/*"
                name="recetas"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.recetas}
                {...getFieldProps("recetas")}
              />
              {touched.recetas && errors.recetas && (
                <TextError>{errors.recetas}</TextError>
              )}
            </FieldForm>
            <FieldForm>
              <LabelForm htmlFor="documentacion">
                Documentación extra (opcional)
              </LabelForm>
              <InputForm
                type="file"
                accept="image/*"
                name="documentacion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.documentacion}
                {...getFieldProps("documentacion")}
              />
            </FieldForm>
          </fieldset>

          <div className="flex mt-10 w-fit mx-auto gap-[4rem] lg:gap-[38rem] sm:gap-[10rem] px-5">
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
      )}*/}
        </>
    );
}
