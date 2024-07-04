import "./Home.css";
import imgProject from "../../assets/Projeto.png"
const Home = () => {
  return (
    <main>
      <div className="titleHome">
        <h1>Bem-vindo ao meu portfólio!</h1>
        <h2>Me chamo, <strong>Erik Ferreira.</strong></h2>
        <h3> desenvolvedor <strong> front-end.</strong></h3>
      </div>
      <article>
        <div className="projectHome">
          <a href="#"><img src={imgProject} alt="" /></a>
        </div>
      </article>
    </main>
  );
};

export default Home;
