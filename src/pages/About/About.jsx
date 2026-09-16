import "./About.css";
import profilePhoto from "../../assets/profile-photo.png";
import { FaCubes, FaJava, FaReact } from "react-icons/fa";
import PropTypes from "prop-types";
import {
  SiApachemaven,
  SiDocker,
  SiFlyway,
  SiGithubactions,
  SiHibernate,
  SiJunit5,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
} from "react-icons/si";

const Skill = ({ icon, name, className }) => (
  <div className={`skill ${className}`} title={name}>
    {icon}
    <span>{name}</span>
  </div>
);

Skill.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <main className="about">
      <div className="profileFrame">
        <img src={profilePhoto} alt="Erik Ferreira" />
      </div>

      <div className="titleAbout">
        <p>
          Desenvolvedor backend com foco em Java e Spring Boot, especializado em
          construir APIs REST robustas com arquitetura hexagonal, regras de
          negócio bem definidas e testes automatizados. Meu projeto de
          referência, o StockSync, sincroniza estoque e pedidos entre
          marketplaces com autenticação segura e integração via OAuth2. Vim do
          front-end e migrei pro back-end por identificação com a área — hoje é
          onde busco construir soluções organizadas, confiáveis e prontas pra
          escalar.
        </p>
      </div>

      <section className="technologySection" aria-labelledby="technology-title">
        <div className="technologyHeading">
          <span>STACK</span>
          <h1 id="technology-title">Tecnologias</h1>
        </div>

        <div className="technologyGrid">
          <article className="technologyCard">
            <span className="cardNumber">01</span>
            <h2>Desenvolvimento</h2>

            <h3>Back-end</h3>
            <div className="skillList">
              <Skill icon={<FaJava />} name="Java" className="java" />
              <Skill icon={<SiSpringboot />} name="Spring Boot" className="spring" />
              <Skill
                icon={<SiSpringsecurity />}
                name="Spring Security"
                className="springSecurity"
              />
              <Skill
                icon={<SiHibernate />}
                name="Hibernate / JPA"
                className="hibernate"
              />
              <Skill icon={<SiApachemaven />} name="Maven" className="maven" />
            </div>

            <h3>Front-end</h3>
            <div className="skillList">
              <Skill icon={<FaReact />} name="React" className="react" />
            </div>
          </article>

          <article className="technologyCard">
            <span className="cardNumber">02</span>
            <h2>Dados</h2>
            <p className="cardDescription">Persistência relacional e NoSQL.</p>
            <div className="skillList">
              <Skill icon={<SiPostgresql />} name="PostgreSQL" className="postgresql" />
              <Skill icon={<SiMongodb />} name="MongoDB" className="mongodb" />
            </div>
          </article>

          <article className="technologyCard">
            <span className="cardNumber">03</span>
            <h2>Infraestrutura &amp; Qualidade</h2>
            <p className="cardDescription">
              Documentação, automação, containers e testes.
            </p>
            <div className="skillList">
              <Skill icon={<SiDocker />} name="Docker" className="docker" />
              <Skill icon={<SiGithubactions />} name="GitHub Actions" className="githubActions" />
              <Skill icon={<SiSwagger />} name="Swagger / OpenAPI" className="swagger" />
              <Skill icon={<SiJunit5 />} name="JUnit 5" className="junit" />
              <Skill icon={<SiFlyway />} name="Flyway" className="flyway" />
              <Skill
                icon={<FaCubes />}
                name="Testcontainers"
                className="testcontainers"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
