import React  from 'react';
import { Link } from 'react-router-dom';
import './Fimcad.css';

function Fimcad() {

  return (
    <div className="telafimcad">
        <div className="msgfimcad">
            <p>
            Cadastro concluido com sucesso.
            Segue abaixo algumas dicas para utilizar a plataforma Ponte.
            </p>
        </div>

        <div className="instrufimcad">
            <ul id='intlist'>
            <p>Instruções de contato:</p>
            <p>Seja cordial e empático, trate os seus colegas como gostaria de ser tratado.</p>
            <p>Utilize apenas meios de contato que mantenham registro das conversas.</p>
            <p>Não compartilhe ou utilize as informações trocadas para qualquer outra finalidade que não seja a comunicação com o seu colega.</p>
            <p>Observe e siga as normas da sua universidade.</p>
            <p>Este site não substitui os meios de comunicação oficiais da sua universidade.</p>
            </ul>
        </div>

        <div className='buttondiv1'>
            <ul id="cadlink">
                <li className="button1"><Link to="/Cadastrar">Editar perfil</Link></li>
            </ul>
        </div>

        <div className='buttondiv2'>
            <ul id="cadlink">
                <li className="button2"><Link to="/Buscar">Buscar</Link></li>
            </ul>
        </div>
    </div>
    )
  }

export default Fimcad;