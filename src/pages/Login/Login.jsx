import React from 'react';
import {Link} from 'react-router-dom';

import HeaderLogin from '../../componentes/HeaderLogin/HeaderLogin';
import './login.css'


function Login(){
    return (
        <div>
            <HeaderLogin />

            <main>
              <div className="container-form">
                <div className="container-campos">
                  <form action="" method="POST">
                    <span>Login</span>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome"/>
                    <div className="container-password">
                      <label htmlFor="senha">Senha:</label>
                      <input type="password" name="email"/><br/>
                    </div>
                    <div className="container-btn">
                      <Link to=""><button type="submit">Login</button></Link>
                    </div>
                    <div className="container-link">
                      <Link to=""><small>Esqueceu a senha?</small></Link><br/>
                      <Link to=""><small>Ainda não é cadastrado?</small></Link>
                    </div>
                  </form>
                </div>
              </div>
            </main>
        </div>
    );
}

export default Login;