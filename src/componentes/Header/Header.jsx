import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'


const Header = () => (

  <header>
    <div className="container">
      <div className="img">
        <img src="images/mutiron3.png" alt="MutirON" />
      </div>
      <div className="idBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <button id="btnBusca">Buscar</button>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="">Notificações</Link>
            </li>
            <li>
              <Link to="/login">Perfil</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>


  </header>

);

export default Header;