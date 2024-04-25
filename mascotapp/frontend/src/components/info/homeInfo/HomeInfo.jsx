import PropTypes from "prop-types";
import { Slide, Fade} from "react-awesome-reveal";

export const HomeInfo = ({ title, text, imgUrl, btnInfo }) => {
    return (
      <div className="p-[5%] flex flex-col justify-center items-center">
          <Slide><h1 className="text-center font-bold mb-2 text-[6vmin] lg:text-[3rem] md:text-[7vmin] sm:text-[7vmin]">{title}</h1></Slide>
          <p className="text-center mb-5 text-[3vmin] lg:text-[2.8vmin]">
              {text}
          </p>
          <Fade>
            <button className="mb-[3rem] sm:mb-[5rem] text-[3vmin] lg:text-[2.3vmin] sm:text-[2.5vmin] rounded-[5px] bg-[#273176] hover:bg-[#525c9e] transition duration-[1s] ease-in-out text-[#ffff] p-4 border-5">{btnInfo}</button>
          </Fade>
          <img className="w-[80%] lg:w-[50%] md:w-[70%] sm:w-[80%]" src={imgUrl} alt="" />
      </div>
    )
  }

HomeInfo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    btnInfo: PropTypes.string,
    imgUrl: PropTypes.string,
  };