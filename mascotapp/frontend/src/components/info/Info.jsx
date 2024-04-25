import { HomeInfo } from "./homeInfo/HomeInfo"

export const Info = () => {
  return (
    <div>
        <HomeInfo 
            title="Sé cuidador de mascotas"
            text="Regístrate y llena el formulario para ofrecer tus servicios de cuidado a dueños de mascotas.
            ¡Es una oportunidad para disfrutar mientras haces lo que amas!"
            btnInfo="Regístrate como cuidador"
            imgUrl="/Pet-Transparent.png"
        />
        <HomeInfo 
            title="Encuentra a un cuidador de mascotas"
            text="Regístrate en nuestro sitio y encuentra a cuidadores de confianza que amen a tus mascotas tanto como tú. 
            Conéctate con una comunidad comprometida con el bienestar animal 
            y descubre la tranquilidad de dejar a tu compañero peludo en buenas manos."
            btnInfo="Conoce a los cuidadores de mascotas"
            imgUrl="/pet-care.png"
        />
    </div>
  )
}
