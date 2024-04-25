import "./perfilStyle.css";
import CreateIcon from '@mui/icons-material/Create';

export const PerfilCliente = ({urlImagen, nombre, mascota, telefono, correo, fecha}) => {
  return (
   <div className="client-containers">
        <div className="profile">
            <img src={urlImagen}/>
            <div>
                <h2>
                    {nombre}
                    <CreateIcon className="ml-2"/>
                </h2>
                <h4>Dueña de: {mascota}</h4>
                <p>Teléfono: {telefono}</p>
                <p className="mb-5">Correo: {correo}</p>
                <p>Es parte de Mascotaland desde {fecha}</p>
            </div>
        </div>
        <div className="buttons">
            <button>Editar información</button>
            <a href="/nuevas-reservas">
                <button>Historial de reservas</button>
            </a>
            <a href="/registro-mascotas">
                <button>Agregar mascota</button>
            </a>
        </div>
    </div>
  )
}
