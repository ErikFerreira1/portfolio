import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import projeto from "../../assets/Projeto.png";

import "./Projects.css";
const Carrossel = ({ technologies }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "16px",
      }}
    >
      <ul style={{ display: "flex", maxWidth: "500px", textAlign: "center" }}>
        <Marquee
          pauseOnHover={true}
          autoFill={true}
          gradient={true}
          gradientColor={[24, 24, 27]}
          style={{ width: "100%", fontSize: "24px" }}
        >
          {technologies.map((item, i) => (
            <li key={i} style={{ margin: "0 8px" }}>
              {item}
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};

const Project = () => {
  const technologies = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <IoLogoJavascript />,
    <FaNodeJs />,
    <SiMongodb />,
  ]; // Exemplo de tecnologias

  return (
    <main className="project">
      <div className="titleProject">
        <h1>Projetos</h1>
      </div>
      <div className="Project">
        <ul>
          <li>
            <div className="imgProject">
              <img src={projeto} alt="projeto" />
            </div>
            <div className="infoProject">
              <div className="title">
                <h1>Movflx</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  corporis similique voluptates optio officia odio
                  necessitatibus, dolor praesentium magnam atque nisi, eaque
                  natus sed alias nobis, est cupiditate sequi eius? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sit aspernatur
                  blanditiis porro dolore ad laboriosam, id ex fugit sapiente.
                  Esse porro blanditiis totam? Magni libero expedita esse,
                  laboriosam quidem odio?
                </p>
                <Carrossel technologies={technologies} />
              </div>
              <div className="buttons">
                <a href="#">
                  <button>
                    {" "}
                    <BiLogoGithub className="github" /> Detalhes
                  </button>
                </a>
                <a href="#">
                  <button>
                    <BiLogoGithub className="github" />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Project;
