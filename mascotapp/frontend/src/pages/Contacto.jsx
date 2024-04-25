import {
  FieldForm,
  InputForm,
  LabelForm,
  TextAreaForm,
} from "../styles/CuidadorRegistroStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextError from "../components/text-error/TextError";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

/* EN PROCESO */
const Contacto = () => {
  const form = useRef();
  const validationSchemaForm = Yup.object({
    nombre: Yup.string().trim().required("Ingresa tu nombre. Ej: Jorge"),
    apellido: Yup.string().trim().required("Ingresa tu apellido. Ej: Pérez"),
    correo: Yup.string()
      .email("Formato de correo inválido")
      .required("Ingresa tu correo eléctronico"),
    descripcion: Yup.string().trim().required("Por favor escriba su pregunta"),
  });

  const initialValues = {
    nombre: "",
    apellido: "",
    correo: "",
    descripcion: "",
  };

  const enviarForm = (values) => {
    console.log(values);
  };

  const sendEmail = () => {
    emailjs
      .sendForm('service_rys7tcj', 'template_zx87jjd', form.current, {
        publicKey: '3SL72t_Qn7xcaDa9_',
      })
      .then(
        () => {
          console.log('CORREO ENVIADO!');
        },
        (error) => {
          console.log('ERROR...', error.message);
        },
      );
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
    validationSchema: validationSchemaForm,
    onSubmit: (values, { resetForm }) => {
      sendEmail();
      enviarForm(values);
      resetForm();
    }
  });
  return (
    <form action="" className="py-10 mt-10" ref={form} onSubmit={handleSubmit}>
      <h2 className="h2 text-center my-10 text-color-3">
        Contáctate con nosotros
      </h2>
      <fieldset className="grid grid-cols-1 items-center gap-9 w-fit mx-auto">
        <FieldForm>
          <LabelForm htmlFor="nombre">
            Nombre <span>*</span>
          </LabelForm>
          <InputForm
            type="text"
            name="nombre"
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
          <LabelForm htmlFor="correo">
            Correo <span>*</span>
          </LabelForm>
          <InputForm
            type="email"
            name="correo"
            onBlur={handleBlur}
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
          <LabelForm htmlFor="descripcion">
            Deja tu mensaje <span>*</span>
          </LabelForm>
          <TextAreaForm 
            type="text" 
            rows="4" 
            cols="33" 
            name="descripcion" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.descripcion}
            error={touched.descripcion && errors.descripcion}
            {...getFieldProps("descripcion")}
          />
          
        </FieldForm>
      </fieldset>
      <div className="mt-10  w-fit gap-10 md:gap-[10rem] mx-auto flex flex-col">
        <button
          type="submit"
          className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contacto;
