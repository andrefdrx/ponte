import React  from 'react';
import './Perfil.css';
import okico from './img/okico.svg';
import noico from './img/noico.svg';
import toto from './img/totosmart.png';

function Perfil() {

  return (
    <div className="telaperfil">
        <div className="perfilimg">
            <img className='imgp' src={toto} alt='toto' />
        </div>

        <div className="nomeano">
            <p>
            Toto, 2020
            </p>
        </div>

        <div className="polo">
            <p>
            Polo Cachorrada
            </p>
        </div>

        <div className="bio">
            <p>
            Cursando Letras com ênfase em Literatura Canina, adoro passear e fazer novas amizades. Faço parte da liga esportiva da Univesp, 3 vezes campeão de corrida na categoria 4 patas. Será um prazer te apresentar nossa cultura universitária e te ajudar a se adaptar.
            </p>
        </div>

        <div className='divbutton'>
                <img className='buttonno' src={noico} alt='menu' />
                <img className='buttonok' src={okico} alt='menu' />
        </div>    
    </div>
    )
  }

export default Perfil;