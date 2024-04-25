import "./bannerStyle.css";
//Implementación de librería animate.css (opcional)
import 'animate.css';

export const Banner = () => {
  return (
    <>
    <div className="banner-container">
        <div className="bannerTitle-container animate__animated animate__fadeInUp">
            <h1 className="font-bold">Un espacio de <br /> cuidado para tu perro</h1>
        </div>
        <div className="bannerInfo-container animate__animated animate__fadeInUp">
            <div className="banner-info">
                <p> 
                    Únete como cuidador para brindar amor y atención a las mascotas, 
                    o regístrate como dueño para encontrar al cuidador perfecto para 
                    tu compañero peludo. ¡Descubre una comunidad comprometida con 
                    el bienestar animal!
                </p>
            </div>
        </div>
    </div>
    </>
  )
}