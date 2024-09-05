import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoGithub } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import projeto from "../../assets/Projeto.png";

import "./Projects.css";
const Carrossel = ({ technologies }) => {
  return (
    <div
      className="marquee"
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
          gradientColor="rgba(0, 0, 0, 1)"
          speed={40}
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
  ];

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
                Movflx é um site de filmes desenvolvido utilizando a API do TheMovieDB, oferecendo uma experiência completa para os amantes de cinema. Entre suas principais funcionalidades estão a exibição dos filmes mais buscados e bem avaliados do momento, pesquisa detalhada de títulos e informações completas, incluindo sinopse, pôster, nota, duração, ano de lançamento e a opção de favoritar filmes. O site também conta com um sistema de busca por gêneros e sistema de login e cadastro com autenticação JWT.

                </p>
                <Carrossel technologies={technologies} />
              </div>
              <div className="buttons">
                <Link to="https://erikferreira1.github.io/Movflx/Front-end/index.html" target="_blank">
                  <button className="arrow">
                    {" "}
                    <MdKeyboardArrowRight /> ACESSE
                  </button>
                </Link>

             
                  <a href="https://github.com/ErikFerreira1/Movflx" target="_blank">
                    <button className="github">
                      <BiLogoGithub />
                      GITHUB
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
