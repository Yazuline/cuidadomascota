import styled from "styled-components";

export const CardContainer = styled.article`
  max-width: 270px;
  cursor: pointer;
  position: relative;
`;

export const ImagenUser = styled.figure`
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: black;
  & img {
    transition: all 0.3s ease-in-out;
    width: 270px;
    height: 330px;
    object-fit: cover;
  }
  ${CardContainer}:hover & img {
    transform: scale(1.15);
    opacity: 0.5;
  }
`;

export const NameUser = styled.h2`
  font-weight: 800;
  font-size: 1.25rem;
`;
export const DescriptionUser = styled.p`
  padding: 3px 0 8px;
  font-size: 12px;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  transition: all 0.3s ease-in-out;
`;
export const TextBold = styled.span`
  font-weight: 700;
  color: black;
`;

export const DescriptionSecundaria = styled(DescriptionUser)`
  opacity: 0;
  max-height: 0;
  color: black;
  line-height: 14px;
  font-weight: 600;
  padding: 0px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */

  ${CardContainer}:hover & {
    opacity: 1;
    max-height: 50px;
    padding: 5px 5px;
  }
`;

export const ContainerDescription = styled.div`
  margin-bottom: 0px;
  transition: all .5s ease-in-out;
  ${CardContainer}:hover & {
    margin-bottom: 15px;
  }
`;

export const PuntuacionUser = styled.figure`
  position: absolute;
  width: 100%;
  bottom: 90%;
  left: 0;
  right: -8.5rem;
  transition: all 0.3s ease-out;
  ${CardContainer}:hover & {
    bottom: 70%;
    right: 0;
  }
  & img {
    transition: width 0.3s ease-in-out;
    width: 100px;
    ${CardContainer}:hover & {
      width: 150px;
    }
  }
`;
