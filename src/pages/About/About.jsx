import "./About.css";
import  perfil  from "../../assets/perfil.png";
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
        <img src={perfil} alt="perfil" />
      </div>
      <div className="titleAbout">
        <p>
          Olá! Meu nome é Erik Ferreira, tenho 21 anos. Em 2023 tive meu
          primeiro contato com a programação, começando com o back-end em
          Python. No entanto, ao descobrir as diversas áreas da programação,
          surgiu a dúvida sobre qual caminho seguir. Quando conheci o front-end,
          fiquei muito mais interessado na parte web. Desde então, tenho me
          dedicado a me especializar na área.
        </p>
      </div>
      <div className="personaSkills">
        <div className="softSkills">
          <h1>SOFT SKILLS</h1>
          <h2>Comunicação</h2>
          <h2>Adaptabilidade</h2>
          <h2>Resolução de problemas</h2>
        </div>
        <div className="tecnology">
          <h1>tecnologias</h1>
          <div className="skills">
            <FaHtml5 className="html" title="HTML" />
            <FaCss3Alt className="css" title="CSS" />
            <IoLogoJavascript className="js" title="JavaScript" />
            <FaReact className="react" title="React" />
          </div>
          <div className="skillsLow">
            <SiMongodb className="mongo" title="MongoDB" />
            <FaNodeJs className="node" title="Node.js" />
            <FaPython className="python" title="Python" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sobre;
