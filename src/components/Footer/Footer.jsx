import * as C from "./styles";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <C.footer>
      <C.title>Made by Igor.</C.title>
      <C.title>
        <C.icones
          href="https://www.linkedin.com/in/igorfreire3/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="icons" />
        </C.icones>
        <C.icones
          href="https://www.instagram.com/igorfreire.3/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="icons" />
        </C.icones>
        <C.icones
          href="https://github.com/IgorFreiredeMorais"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icons" />
        </C.icones>
      </C.title>
    </C.footer>
  );
};

export default Footer;
