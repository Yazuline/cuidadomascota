import "./perfilMascotaStyle.css";

export const PerfilMascota = ({isVisible = true, textClass, petDesc, petImg}) => {
  return (
    <div className="perfil-mascota">
        <img src={petImg} alt="" />
        <div className="info">
            <div className="special-div">
                <img src={petImg} alt="" />
                <p className={textClass}>
                    {petDesc}
                </p>
            </div>
            <div className={isVisible ? "buttons" : "invisible"}>
            <a href="/mascota">
                <button>Conocer más</button>
            </a>
            </div>
        </div>
    </div>
  )
}
