import React from "react";
import {
  CardContainer,
  DescriptionSecundaria,
  DescriptionUser,
  ImagenUser,
  NameUser,
  ContainerDescription,
  PuntuacionUser,
  TextBold,
} from "../styles/UsersStyled";
import Button from "./button/Button";
import { Link } from "react-router-dom";

const ListCuidadores = ({
  _id,
  nombre,
  urlfoto,
  barrio,
  servicio,
  sobreti,
}) => {
  const isSrcEmpty = (src) => {
    return !src || src.trim() === "";
  };

  const imageUser = isSrcEmpty(urlfoto);
  const imageDefault = `https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  return (
    <CardContainer>
      <div className="relative rounded-lg">
        <ImagenUser>
          <img
            src={imageUser ? imageDefault : urlfoto}
            alt={`Cuidador ${nombre}`}
          />
        </ImagenUser>
        <div className="absolute bg-white  bottom-3 text-center px-3 py-2 rounded-lg right-0 left-0 max-w-[245px] m-auto overflow-hidden">
          <div className="flex flex-col justify-center">
            <NameUser>{nombre}</NameUser>
            <DescriptionUser>
              Cuidador/a en barrio <TextBold>{barrio}</TextBold>
            </DescriptionUser>
            <ContainerDescription>
              <DescriptionSecundaria>
                Ofrece servicios de {servicio}
              </DescriptionSecundaria>
              <DescriptionSecundaria>
                <span className="font-500 text-gray-600">{sobreti}</span>
              </DescriptionSecundaria>
            </ContainerDescription>
          </div>
          <Button border center>
            <Link
              to={`/cuidador/${_id}`}
              className="text-center text-sm py-2 px-3"
            >
              Más información
            </Link>
          </Button>
        </div>
      </div>
    </CardContainer>
  );
};

export default ListCuidadores;
