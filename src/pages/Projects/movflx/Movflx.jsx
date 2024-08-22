import React from "react";
import "./Movflx.css";

const Movflx = () => {
  return (
    <>
      <div className="back">
        <a href="../Projects">Voltar</a>
      </div>
      <main className="movflx">
        <div className="movflxTitle">
          <h1>Movflx</h1>
        </div>
        <div className="movflxImg">
          <img src="#" alt="a" />
          <img src="#" alt="a" />
          <img src="#" alt="a" />
          <img src="#" alt="a" />
        </div>
        <div className="movflxInfo">
          <div className="overview">
            <h1>Visão geral</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nemo officiis quia, dolor veniam aliquam rem adipisci excepturi unde autem beatae? Reiciendis repudiandae itaque modi sed quibusdam debitis quas maxime.</p>
          </div>
          <div className="techInfo">
            <h1>especificações</h1>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Movflx;
