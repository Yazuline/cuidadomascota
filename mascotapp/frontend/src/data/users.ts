interface Cuidador {
  id: string;
  nombre: string;
  imagen: string;
  ciudad: string;
  servicio: string;
  descripcion: string;
  correo?: string;
  telefono?: number;
  precioDelServicio?: string;
}

interface tablaBackendEjemplo {
  _id?: string;
  nombre?: string;
  apellido?: string;
  domicilio?: string;
  barrio?: string;
  dni?: number;
  telefono?: number;
  email?: string;
  password?: string;
  sobreti?: string;
  horario?: string;
  servicio?: string;
  precioservicio?: number;
  role?: string;
  urlfoto?: string;
  mascota?: string;
  raza?: string;
  fecha?: string;
  peso?: string;
  enfermedad?: string;
  medicamento?: string;
  personalidad?: string;
  vacunas?: string;
  cartilla?: string;
  recetas?: string;
  documentacion?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const usuarioCuidador: tablaBackendEjemplo[] = [
  {
    _id: "1",
    nombre: "Angélica",
    apellido: "Lopez",
    urlfoto: "",
    barrio: "Belgrano",
    servicio: "Peluqueria",
    sobreti:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@examples.com",
    telefono: 123456789,
    precioservicio: 10200,
  },
  {
    _id: "2",
    nombre: "Roberto",
    apellido: "Lopez",
    urlfoto:
      "https://okdiario.com/img/2019/10/14/-de-donde-viene-la-amistad-entre-el-hombre-y-el-perro_-655x368.jpg",
    barrio: "Palermo",
    servicio: "Supervision 24/7",
    sobreti:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 12000,
  },
  {
    _id: "3",
    nombre: "Maria",
    urlfoto: "https://www.concierto.cl/wp-content/uploads/2019/09/perro.png",
    barrio: "Nuñez",
    servicio: "Paseos",
    sobreti:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 10000,
  },
  {
    _id: "4",
    nombre: "Luis",
    apellido: "Lopez",
    urlfoto:
      "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/02/27/63fcd4aa6a8d6.jpeg",
    barrio: "Chacarita",
    servicio: "Guarderia",
    sobreti:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 6000,
  },
  {
    _id: "5",
    nombre: "Pamela",
    apellido: "Lopez",
    urlfoto:
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/6D93/production/_126415082_gettyimages-1317523051.jpg",
    barrio: "Colegiales",
    servicio: "Peluqueria",
    sobreti:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 10000,
  },
  {
    _id: "6",
    nombre: "Sofia",
    apellido: "Lopez",
    urlfoto:
      "https://s1.elespanol.com/2023/02/15/curiosidades/mascotas/741686473_230935626_1706x960.jpg",
    barrio: "Colegiales",
    servicio: "Peluqueria",
    sobreti:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 10000,
  },
  {
    _id: "7",
    nombre: "Luciana",
    apellido: "Lopez",
    urlfoto:
      "https://estaticos-cdn.prensaiberica.es/clip/b5648233-d5c4-48ab-84f8-7e5fd5485fba_16-9-aspect-ratio_default_0.jpg",
    barrio: "Colegiales",
    servicio: "Peluqueria",
    sobreti:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 10000,
  },
  {
    _id: "8",
    nombre: "Luca",
    apellido: "Lopez",
    urlfoto:
      "https://www.universomascotas.co/wp-content/uploads/2021/11/por-que-hay-mascotas-que-se-parecen-a-sus-duenos.jpg",
    barrio: "Colegiales",
    servicio: "Peluqueria",
    sobreti:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    email: "nombre@example.com",
    telefono: 123456789,
    precioservicio: 10000,
  },
];

export const userCuidador: Cuidador[] = [
  {
    id: "1",
    nombre: "Angélica",
    imagen: "",
    ciudad: "Belgrano",
    servicio: "Peluqueria",
    descripcion:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "2",
    nombre: "Roberto",
    imagen:
      "https://okdiario.com/img/2019/10/14/-de-donde-viene-la-amistad-entre-el-hombre-y-el-perro_-655x368.jpg",
    ciudad: "Palermo",
    servicio: "Peluqueria",
    descripcion:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "3",
    nombre: "Maria",
    imagen: "https://www.concierto.cl/wp-content/uploads/2019/09/perro.png",
    ciudad: "Nuñez",
    servicio: "Peluqueria",
    descripcion:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "4",
    nombre: "Luis",
    imagen:
      "https://imagenes.muyinteresante.com/files/image_670_447/uploads/2023/02/27/63fcd4aa6a8d6.jpeg",
    ciudad: "Chacarita",
    servicio: "Peluqueria",
    descripcion:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "5",
    nombre: "Pamela",
    imagen:
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/6D93/production/_126415082_gettyimages-1317523051.jpg",
    ciudad: "Colegiales",
    servicio: "Peluqueria",
    descripcion:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "6",
    nombre: "Sofia",
    imagen:
      "https://s1.elespanol.com/2023/02/15/curiosidades/mascotas/741686473_230935626_1706x960.jpg",
    ciudad: "Colegiales",
    servicio: "Peluqueria",
    descripcion:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "7",
    nombre: "Luciana",
    imagen:
      "https://estaticos-cdn.prensaiberica.es/clip/b5648233-d5c4-48ab-84f8-7e5fd5485fba_16-9-aspect-ratio_default_0.jpg",
    ciudad: "Colegiales",
    servicio: "Peluqueria",
    descripcion:
      "Soy una cuidadora de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
  {
    id: "8",
    nombre: "Luca",
    imagen:
      "https://www.universomascotas.co/wp-content/uploads/2021/11/por-que-hay-mascotas-que-se-parecen-a-sus-duenos.jpg",
    ciudad: "Colegiales",
    servicio: "Peluqueria",
    descripcion:
      "Soy un cuidador de mascotas con más de 5 años de experiencia en peluquería básica para perros. Ofrezco servicio seguros y sin estrés, garantizando un aspecto increíble para tus peludos amigos.",
    correo: "nombre@example.com",
    telefono: 123456789,
    precioDelServicio: "10000",
  },
];
