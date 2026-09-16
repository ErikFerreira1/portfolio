import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3Alt,
  FaCubes,
  FaExternalLinkAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import {
  SiDocker,
  SiFlyway,
  SiJunit5,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiSpringsecurity,
} from "react-icons/si";
import projeto from "../../assets/Projeto.png";
import projetoMobile from "../../assets/ProjetoMobile.png";
import stockSyncImage from "../../assets/stocksync-architecture.svg";
import "./Projects.css";

const technologyPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
});

const stockSyncTechnologies = [
  { label: "Java 17", icon: <FaJava /> },
  { label: "Spring Boot", icon: <SiSpringboot /> },
  { label: "Spring Security", icon: <SiSpringsecurity /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "Flyway", icon: <SiFlyway /> },
  { label: "Docker", icon: <SiDocker /> },
  { label: "JUnit 5", icon: <SiJunit5 /> },
  { label: "Testcontainers", icon: <FaCubes /> },
];

const movflxTechnologies = [
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "CSS3", icon: <FaCss3Alt /> },
  { label: "JavaScript", icon: <IoLogoJavascript /> },
  { label: "Node.js", icon: <FaNodeJs /> },
  { label: "MongoDB", icon: <SiMongodb /> },
];

const projects = [
  {
    name: "StockSync",
    image: stockSyncImage,
    imageAlt:
      "Diagrama do StockSync conectando estoque, API Java e marketplace",
    description: (
      <>
        API REST multi-marketplace com{" "}
        <strong className="projectHighlight">arquitetura hexagonal</strong> para
        centralizar estoque, pedidos e sincronização de anúncios no Mercado
        Livre. Autenticação <strong className="projectHighlight">JWT</strong> com
        perfis de acesso, integração{" "}
        <strong className="projectHighlight">OAuth2</strong> com refresh
        automático de token, credenciais{" "}
        <strong className="projectHighlight">
          criptografadas (AES-256-GCM)
        </strong>{" "}
        e histórico completo de movimentações. Inclui{" "}
        <strong className="projectHighlight">modo demo</strong> com marketplace
        simulado para teste sem conta de desenvolvedor.
      </>
    ),
    technologies: stockSyncTechnologies,
    accessUrl:
      "https://github.com/ErikFerreira1/StockSync#teste-o-projeto",
    accessLabel: "COMO TESTAR",
    repositoryUrl: "https://github.com/ErikFerreira1/StockSync",
  },
  {
    name: "MovFlx",
    image: projeto,
    mobileImage: projetoMobile,
    imageAlt: "Telas do projeto MovFlx em diferentes dispositivos",
    description:
      "Aplicação de filmes integrada à API do The Movie Database. Permite explorar títulos populares e bem avaliados, pesquisar por nome ou gênero, consultar detalhes, favoritar filmes e criar uma conta com autenticação JWT.",
    technologies: movflxTechnologies,
    accessUrl: "https://erikferreira1.github.io/Movflx/Front-end/index.html",
    accessLabel: "ACESSAR",
    repositoryUrl: "https://github.com/ErikFerreira1/Movflx",
  },
];

const TechnologyCarousel = ({ technologies }) => (
  <div className="technologyCarousel" aria-label="Tecnologias do projeto">
    <Marquee
      pauseOnHover
      autoFill
      gradient
      gradientColor="rgb(0, 0, 0)"
      speed={35}
    >
      {technologies.map(({ label, icon }) => (
        <span className="technologyItem" title={label} key={label}>
          {icon}
          <span>{label}</span>
        </span>
      ))}
    </Marquee>
  </div>
);

TechnologyCarousel.propTypes = {
  technologies: PropTypes.arrayOf(technologyPropType).isRequired,
};

const ProjectCard = ({ project, index }) => (
  <article className="projectCard">
    <div className="projectImage">
      <picture>
        {project.mobileImage && (
          <source media="(max-width: 768px)" srcSet={project.mobileImage} />
        )}
        <img src={project.image} alt={project.imageAlt} />
      </picture>
    </div>

    <div className="projectInfo">
      <span className="projectNumber">PROJETO {String(index + 1).padStart(2, "0")}</span>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <TechnologyCarousel technologies={project.technologies} />

      <div className="projectButtons">
        <a href={project.accessUrl} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
          {project.accessLabel}
        </a>
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="repositoryButton"
        >
          <BiLogoGithub />
          REPOSITÓRIO
        </a>
      </div>
    </div>
  </article>
);

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mobileImage: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    technologies: PropTypes.arrayOf(technologyPropType).isRequired,
    accessUrl: PropTypes.string.isRequired,
    accessLabel: PropTypes.string.isRequired,
    repositoryUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => (
  <main className="projectsPage">
    <header className="projectsHeader">
      <span>MEU TRABALHO</span>
      <h1>Projetos</h1>
      <p>Aplicações que transformam regras de negócio em soluções funcionais.</p>
    </header>

    <section className="projectsList" aria-label="Lista de projetos">
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={project.name} />
      ))}
    </section>
  </main>
);

export default Projects;
