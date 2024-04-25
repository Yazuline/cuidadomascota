interface Reserva {
  id?: number;
  imagen?: string;
  nombre?: string;
  apellido?: string;
  precio?: number;
  servicio?: string;
  fecha?: string;
  estado?: string;
  rol?: string;
}

interface Users extends Reserva {
  fechaRegistro?: string;
  domicilio?: string;
  telefono?: number;
  correo?: string;
  monto?: number;
  // modificar
}

//Administrar todos los usuarios segun su rol
export const usersAll: Users[] = [
  {
    id: 1,
    nombre: "Estefano",
    apellido: "Ramos",
    fechaRegistro: "20/04/2024",
    domicilio: "Manza K Lote 3",
    telefono: 1132212211,
    correo: "estefano@correo.com",
    monto: 12000,
    rol: "cliente",
  },
  {
    id: 2,
    nombre: "Katy",
    apellido: "Lopez",
    fechaRegistro: "18/04/2024",
    domicilio: "Manza J Lote 1",
    telefono: 3232422233,
    correo: "katiuska@correo.com",
    monto: 22000,
    rol: "cuidador",
  },
];

//Administrar reservas ejemplo
export const userReserva: Reserva[] = [
  {
    id: 1,
    imagen:
      "https://cdn.unotv.com/images/2023/08/perro-mujer-154410-1024x576.jpg",
    nombre: "Paula",
    apellido: "Ramos",
    precio: 12000,
    servicio: "Baño",
    fecha: "19/04/2024",
    estado: "pendiente",
  },
  {
    id: 2,
    imagen:
      "https://okdiario.com/img/2019/10/14/-de-donde-viene-la-amistad-entre-el-hombre-y-el-perro_-655x368.jpg",
    nombre: "Roberto",
    apellido: "Bolaños Gonzalez",
    precio: 13400,
    servicio: "Cuidado",
    fecha: "18/04/2024",
    estado: "pendiente",
  },
  {
    id: 3,
    imagen:
      "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/02/27/63fcd4aa6a8d6.jpeg",
    nombre: "José",
    apellido: "Lopez",
    precio: 11600,
    servicio: "Paseo",
    fecha: "17/04/2024",
    estado: "pendiente",
  },

  {
    id: 4,
    imagen: "https://www.concierto.cl/wp-content/uploads/2019/09/perro.png",
    nombre: "Maria",
    apellido: "Gonzalez",
    precio: 9900,
    servicio: "Paseo",
    fecha: "17/04/2024",
    estado: "pendiente",
  },
];
