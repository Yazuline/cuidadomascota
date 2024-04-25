import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { Border, MenuContainer, MenuItem } from "./NavbarStyled";
import { NavLink } from "react-router-dom";
import { navigation } from "./ListNavigation";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import "animate.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 bg-white shadow-md z-10">
      <div className="flex items-center justify-between md:p-4 xl:max-w-screen-xl mx-auto lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
        <div className="flex items-center justify-between lg:gap-[2.9rem] sm:gap-3 w-full md:w-fit">
          <div className="pl-8 py-3 md:p-0 md:bg-none">
            <a href="/">
              <img className="animate__animated animate__fadeInDown" src={logo} alt="Logo mascota" width="40px" />
            </a>
          </div>

          <MenuContainer $isMenuOpen={isMenuOpen}>
            <Border />
            <ul>
              <span className="text-[13px] text-gray-400 md:hidden z-30">
                Conoce AppMascota
              </span>
              {navigation.map(({ title, to }) => (
                <MenuItem key={title}>
                  <NavLink
                    onClick={toggleMenu}
                    to={to}
                    className={({ isActive }) =>
                      `link ${
                        isActive
                          ? "active text-color-1 font-medium"
                          : "font-normal opacity-70 md:opacity-60 md:font-medium"
                      } `
                    }
                  >
                    {title}
                  </NavLink>
                </MenuItem>
              ))}
              <div className="mt-5 gap-3 flex md:hidden">
                {/* //! condicional si exite userId aprarezcan botones:  perfil y cerrar sesion */}
                <Button border>
                  <a href="/entrar" className="px-4 py-2">
                    Iniciar sesión
                  </a>
                </Button>
                <Button>
                  <a href="/registrar-como" className="px-4 py-2">
                    Registrarse
                  </a>
                </Button>
              </div>
            </ul>
          </MenuContainer>

          <button
            onClick={toggleMenu}
            className="cursor-pointer pr-8 pt-2 md:hidden"
          >
            {!isMenuOpen ? (
              <FaBarsStaggered size="1.5rem" />
            ) : (
              <FaX size="1.5rem" />
            )}
          </button>
        </div>

        <div className="gap-3 hidden md:flex">
          <Button border>
            <a href="/entrar" className="px-4 py-2">
              Iniciar sesión
            </a>
          </Button>
          <Button>
            <a href="/registrar-como" className="px-4 py-2">
              Registrarse
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
