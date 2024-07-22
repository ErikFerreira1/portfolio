import "./About.css";
import perfil from "../../assets/perfil.png";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Sobre = () => {
  return (
    <main className="about">
      <div className="titleAboutMe">
        <h1>Um pouco sobre mim</h1>
      </div>
      <div className="titleAbout">

         <img src={perfil} alt="perfil" />
        <p>
          Olá! Meu nome é Erik Ferreira, sou do interior de Pernambuco. Desde
          criança, sempre tive um grande interesse por tecnologia. Foi em 2023
          que tive meu primeiro contato com a programação, começando com o
          back-end em Python. No entanto, ao descobrir as diversas áreas da
          programação, surgiu a dúvida sobre qual caminho seguir. Quando conheci
          o front-end e vi tudo o que poderia fazer, fiquei muito mais
          interessado na parte web. Desde então, tenho me dedicado a me
          especializar em desenvolvimento front-end, buscando sempre aprender
          novas técnicas e aprimorar minhas habilidades.
        </p>
      </div>
      <div className="tecnology">
        <h1>tecnologias</h1>
        <div className="skills">
          <FaHtml5 className="html" title="HTML" />
          <FaCss3Alt className="css" title="CSS" />
          <IoLogoJavascript className="js" title="JavaScript" />
          <FaReact className="react" title="React" />
          <SiMongodb className="mongo" title="MongoDB" />
          <FaNodeJs className="node" title="Node.js" />
          <FaPython className="python" title="Python" />
        </div>
      </div>
    </main>
  );
};

export default Sobre;
