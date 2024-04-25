import {
    FieldForm,
    InputForm,
    LabelForm,
    SelectForm,
    TextAreaForm,
  } from "../styles/CuidadorRegistroStyled";
  import { FaArrowRight } from "react-icons/fa6";
  import { FaArrowLeft } from "react-icons/fa6";
  import * as Yup from "yup"; 
import { useFormik } from "formik";
import TextError from "../components/text-error/TextError";
import { addMascota } from "../services/serviceMascota";

export const RegistroMascotas = () => {
    const vacunaRegex = "si";

    const initialValues = {
        mascota: "",
        raza: "",
        fecha: "",
        peso: "",
        enfermedad: "",
        medicamento: "",
        personalidad: "",
        vacunas: "",
        cartilla: "",
        recetas: "",
        documentacion: "",  
      };

      const validationSchemaPet = Yup.object({
        mascota: Yup.string().required("Ingrese un nombre"),
        raza: Yup.string().required("Ingrese una raza"),
        fecha: Yup.string().required("Ingrese una fecha"),
        peso: Yup.string().required("Ingrese el peso"),
        enfermedad: Yup.string().required("llene el campo"),
        medicamento: Yup.string().required("Ingrese un dato"),
        vacunas: Yup.string()
            .matches(vacunaRegex, "Su mascota debe estar vacunada")
            .required("Seleccione un campo"),
        cartilla: Yup.string().required("Adjunte el documento"),
        recetas: Yup.string().required("Adjunte el documento"),
        personalidad: Yup.string().required("Adjunte el documento"),
    });

      const formatearMascota = async (inputFront) => {
        const inputBack = {
            nombre: inputFront.mascota,
            raza: inputFront.raza,
            fecha: inputFront.fecha,
            enfermedad: inputFront.enfermedad,
            medicamento: inputFront.medicamento,
            personalidad: inputFront.personalidad,
            vacunas: inputFront.vacunas,
            peso: inputFront.peso,
            urlvacunas: inputFront.cartilla,
            urlrecetasmedicas: inputFront.recetas,
            urldocumentoextra: inputFront.documentacion,
        };

            console.log(inputBack);

            try {
                await addMascota(inputBack);
                return inputBack;
            } catch (error) {
                console.log('Error al agregar mascota:', error.message);
                console.log('Cuerpo solicitud: ', inputBack)
                throw error;
            }
        }
    
      const enviarForm = (values) => {
        //console.log(values);
        /*const fechaActual = new Date();
        const i = new Date(values.fecha);
        console.log(i.getFullYear() - fechaActual.getFullYear());*/
        formatearMascota(values);
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
        validationSchema: validationSchemaPet,
        onSubmit: (values, { resetForm }) => {
          enviarForm(values);
          //resetForm();
        },
      });

  return (
    <form action="" className="p-5" onSubmit={handleSubmit}>
          <h2 className="text-[8vmin] font-bold text-center my-20 text-color-3 lg:text-[3rem] md:text-[2rem] sm:text-[2.5rem]">Datos de mascotas</h2>
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
                error={touched.personalidad && errors.personalidad}
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
              {touched.vacunas && errors.vacunas &&(
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
            <a href="/perfil-dueño">
              <button
                type="button"
                className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
              >
                <FaArrowLeft />
                Volver
              </button>
            </a>
            <button
              type="submit"
              className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
            >
              Enviar <FaArrowRight />
            </button>
          </div>
        </form>
  )
}
