import { useFormik } from "formik";
// import { IoClose } from "react-icons/io5";
import {
  FieldForm,
  InputForm,
  LabelForm,
  SelectForm,
  TextAreaForm,
} from "../../styles/CuidadorRegistroStyled";
import { MdDelete } from "react-icons/md";

const ModificarPerfil = ({
  _id,
  nombre,
  apellido,
  urlfoto,
  telefono,
  email,
  barrio,
  sobreti,
  servicio,
  precioservicio,
}) => {
  //& Modificar los valores para cada usuario - backend
  const inititalValues = {
    nombre: nombre,
    apellido: apellido,
    barrio: barrio,
    correo: email,
    servicio: servicio,
    telefono: telefono,
    sobreti: sobreti,
    precioservicio: precioservicio,
  };

  const actualizarUsuario = (values) => {
    console.log(values);
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: inititalValues,
    onSubmit: actualizarUsuario,
  });

  const eliminarUsuario = () => {
    //& Parte backend:

    //Parte Frontend: simulo la eliminacion del usuario | Modal delete confirm
    console.log("Cliente eliminado");
    // setUsuarioEliminado(!usuarioEliminado);
  };

  return (
    <>
      <form action="" className="py-10" onSubmit={handleSubmit}>
        <fieldset className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 w-fit mx-auto">
          <FieldForm>
            <LabelForm htmlFor="nombre">Nombre</LabelForm>
            <InputForm
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="apellido">Apellido</LabelForm>
            <InputForm
              type="text"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="barrio">
              Barrio <span>*</span>
            </LabelForm>
            <SelectForm
              name="barrio"
              value={values.barrio}
              onChange={handleChange}
            >
              <option value="Belgrano">Belgrano</option>
              <option value="Chacarita">Chacarita</option>
              <option value="Colegiales">Colegiales</option>
              <option value="Palermo">Palermo</option>
              <option value="Nuñez">Nuñez</option>
              <option value="Recoleta">Recoleta</option>
            </SelectForm>
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="correo">Correo</LabelForm>
            <InputForm
              type="email"
              name="correo"
              onChange={handleChange}
              value={values.correo}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="clave">Contraseña</LabelForm>
            <InputForm
              type="password"
              name="clave"
              onChange={handleChange}
              value={values.clave}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="telefono">Teléfono</LabelForm>
            <InputForm
              type="number"
              name="telefono"
              onChange={handleChange}
              value={values.telefono}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="sobreti">
              Cuéntanos un poco sobre ti <span>*</span>
            </LabelForm>
            <TextAreaForm
              type="text"
              rows="4"
              cols="33"
              name="sobreti"
              onChange={handleChange}
              value={values.sobreti}
            />
          </FieldForm>

          <FieldForm>
            <LabelForm htmlFor="servicio">Servicio</LabelForm>
            <SelectForm
              name="servicio"
              onChange={handleChange}
              value={values.servicio}
            >
              <option value="Baños">Baños</option>
              <option value="Paseos">Paseos</option>
              <option value="Peluqueria">Peluqueria</option>
              <option value="Guarderia">Guarderia</option>
              <option value="Supervision 24/7">Supervision 24/7</option>
              <option value="Otros">Otros</option>
            </SelectForm>
          </FieldForm>
        </fieldset>
        <div className="w-fit flex mx-auto gap-4 flex-col sm:flex sm:flex-row justify-between">
          <button
            onClick={eliminarUsuario}
            type="button"
            className="px-4 py-2 flex items-center gap-3 bg-red-700 text-white rounded-md text-end mt-10 hover:shadow-lg"
          >
            <MdDelete />
            Eliminar mi cuenta
          </button>

          <button
            type="submit"
            className="px-4 py-2 flex items-center gap-3 bg-color-3 text-white rounded-md text-end sm:mt-10 "
          >
            Modificar
          </button>
        </div>
      </form>
    </>
  );
};

export default ModificarPerfil;
