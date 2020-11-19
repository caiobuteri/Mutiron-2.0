import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import Header from '../../componentes/Header/Header'

function PaginaPrincipal() {
  return (

    <div>
      <Header />

      <main className="main">
        <div className="choose-event">
          <div className="botaomut">
            <Link to="/"><button>MUTIRÕES</button></Link>
          </div>
          <div className="botaodoac">
            <Link to="/"><button>DOAÇÕES</button></Link>
          </div>
        </div>

        <div className="eventos">
          <div className="borda">
            <div className="evento">
              <div className="imgEvento">
                <img src="images/teste.png" alt="testando imagem" width="200" height="200" />
              </div>
              <div className="informarcoes">
                <div className="title">
                  Vacina grátis pra COVID-19
                </div>
                <div className="descricao">
                  Amanhã, dia 29 de fevereiro de 2020, estaremos esperando ansiosamente a chegada
                  de milhões de doses da vacina para a COVID-19 aaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaa
                  aaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa
                  aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa
                </div>
                <div className="btnVerMais">
                  <Link to=""><div className="btnV">Ver mais</div></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="espacamento"></div>
          <div className="borda">
            <div className="evento">
              <div className="imgEvento">
                <img src="images/teste.png" alt="testando imagem" width="200" height="200" />
              </div>
              <div className="informarcoes">
                <div className="title">
                  Vacina grátis pra COVID-19
                </div>
                <div className="descricao">
                  Amanhã, dia 29 de fevereiro de 2020, estaremos esperando ansiosamente a chegada
                  de milhões de doses da vacina para a COVID-19 aaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaa
                  aaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa
                  aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa
                </div>
                <div className="btnVerMais">
                  <Link to=""><div className="btnV">Ver mais</div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>

  );
}

export default PaginaPrincipal;