import styled from "styled-components";

export const MenuItem = styled.li`
  position: relative;
  .link {
    font-size: 26px;
  }

  @media (min-width: 768px) {
    .link {
      transition: all 0.3s ease-in-out;
      font-weight: 600;
      font-size: 14px;
      &:hover {
        color: var(--color-primary);
      }
      &::before {
        content: "";
        position: absolute;
        width: 0%;
        background-color: var(--color-primary);
        height: 2px;
        bottom: -10px;
        left: -2.5px;
        transition: all 0.3s ease-in-out;
      }
      &:hover:before {
        width: 110%;
        border-radius: 10px;
        opacity: 0.8;
      }
      &.active:before {
        width: 110%;
      }
    }
  }
  @media (min-width: 992px){
    .link{
      font-size: 1rem;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;
  transition: transform 0.3s ease-in-out;
  /* transform: translateY(-100%); */
  transform: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "translateX(0%)" : "translateX(-100%)"};
  left: 0;
  z-index: -1;
  background-color: white;
  height: 100vh;
  /* display: ${({ $isMenuOpen }) => ($isMenuOpen ? "block" : "none")}; */

  @media (min-width: 768px) {
    transform: initial;
    display: block;
    position: initial;
    gap: 2.25rem;
    z-index: initial;
    top: 0px;
    height: initial;
    background-color: initial;
  }
  ul {
    padding: 6.7rem 27px;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(24 28 57 / var(--tw-text-opacity));
    z-index: -1;
    @media (min-width: 768px) {
      padding: 0px;
      position: initial;
      flex-direction: row;
      gap: 1.25rem;
      z-index: initial;
      top: 0px;
      height: initial;
    }
  }
`;

export const MenuHamburger = styled.button`
  cursor: pointer;
  padding-right: 2rem;
  padding-top: 0.5rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Border = styled.div`
  width: 100%;
  border: 1px solid #e7e7e7;
  position: absolute;
  top: 4.85rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

/* export const NavLink = styled.a`
    

    @media (max-width: 992px){
        
    }
` */
