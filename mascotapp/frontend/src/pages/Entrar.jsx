import { useEffect, useState } from "react";
import LoginImg from "../assets/ilustraciones/login.jpg";
import TextError from "../components/text-error/TextError";
import {
  FieldForm,
  InputForm,
  LabelForm,
} from "../styles/CuidadorRegistroStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUsuarios } from "../services/serviceUsuario";
import Swal from 'sweetalert2'

const Entrar = () => {
  const initialValues = {
    correo: "",
    clave: "",
  };
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosData = await getUsuarios();
        setUsuarios(usuariosData);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);
  const validationSchema = Yup.object({
    correo: Yup.string()
      .email("Correo inválido")
      .required("No olvides ingresar tu correo"),
    clave: Yup.string().trim().required("No olvides ingresar tu contraseña"),
  });

  //! CONTROL DE LOGIN ACÁ
  //! Con esto se encu entra el Usuario;
  //!!! localStorage.getItem('userId')
  const enviarLogin = (values) => {
    //values.preventDefault();
    console.log(values);
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === values.correo && usuario.password === values.clave
    );
    console.log(usuarioEncontrado);
    if (usuarioEncontrado) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido de nuevo!',
        showConfirmButton: false,
        timer: 2000 // La alerta se cerrará automáticamente después de 2 segundos
      }).then(() => {
        localStorage.setItem("userId", usuarioEncontrado._id);
        window.location.href = "/";//Detail del usuario
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales incorrectas",
        confirmButtonColor: '#d33',
        confirmButtonText: 'Entendido'
      });

    }
  };

  const { touched, handleSubmit, values, errors, handleChange } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: enviarLogin,
  });

  return (
    <section className="m-auto h-[100vh] flex items-center mt-[9rem] md:mt-[12rem] lg:mt-0">
      <div className="max-w-[400px] lg:max-w-[1000px] mx-auto justify-center flex flex-col lg:flex-row items-center gap-10 2xl:gap-[109px] px-5 h-96 md:h-fit">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Bienvenido de vuelta
            </h2>
          </div>
          <form action="" onSubmit={handleSubmit} className="">
            <fieldset className="flex flex-col gap-4">
              <FieldForm>
                <LabelForm htmlFor="correo">Correo electrónico</LabelForm>
                <InputForm
                  type="email"
                  name="correo"
                  onChange={handleChange}
                  value={values.correo}
                  error={touched.correo && errors.correo}
                  // placeholder="Ingresa tu correo"
                />
                {touched.correo && errors.correo && (
                  <TextError block>{errors.correo}</TextError>
                )}
              </FieldForm>
              <FieldForm>
                <LabelForm htmlFor="clave">Contraseña</LabelForm>
                <InputForm
                  type="password"
                  name="clave"
                  onChange={handleChange}
                  value={values.clave}
                  error={touched.clave && errors.clave}
                  // placeholder="Ingresa tu contraseña"
                />
                {touched.clave && errors.clave && (
                  <TextError block>{errors.clave}</TextError>
                )}
                <a className="text-sm font-medium text-color-3 transition-all mt-1 hover:text-blue-800 mb-8">
                  ¿Olvidaste la contraseña?
                </a>
              </FieldForm>
              <FieldForm>
                <button
                  className="bg-color-3 transition-all duration-300 hover:bg-color-1 text-white py-4 rounded-lg"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
                <p
                  href="/entrar"
                  className="text-sm font-medium text-center text-black mt-2"
                >
                  ¿No tienes una cuenta?
                  <a
                    href="/registrar-como"
                    className="text-color-3 transition-all hover:text-blue-700"
                  >
                    {" "}
                    Registrate
                  </a>
                </p>
              </FieldForm>
            </fieldset>
          </form>
        </div>
        <div className="image">
          <figure className="bg-black rounded-3xl">
            <img
              src={LoginImg}
              alt="Imagen del login"
              className="bg-red opacity-90 md:min-w-[495px] min-h-[80px] xl:min-w-[765px] xl:min-h-[580px] 2xl:min-w-[895px] 2xl:min-h-[620px] rounded-2xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Entrar;
