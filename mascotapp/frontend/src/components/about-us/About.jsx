import "./aboutStyle.css";
import { JackInTheBox } from "react-awesome-reveal";

export const About = () => {
  const imgs = ["/doggy2.png", "/doggy1.png", "/doggy3.png"]

  return (
    <div className="about__container">
        <div className="aboutImages__container">
            <JackInTheBox>
                {imgs.map((url, index) => (
                    <img key={index} className={`aboutImg${index}`} src={url} alt="" />
                ))}
            </JackInTheBox>
        </div>
        <div className="aboutInfo__container">
            <h4 className="font-bold">Nuestra misión</h4>
            <h1 className="font-bold">Promovemos el bienestar de tu mascota</h1>
            <p>
                Nos esforzamos por conectar a dueños responsables con cuidadores 
                comprometidos, fomentando relaciones de confianza y proporcionando 
                servicios de calidad que promuevan el bienestar y la felicidad 
                de todas las mascotas involucradas.
            </p>
            <img className="pet-icon" src="/icon.png" alt="" />

        </div>
    </div>
  )
}