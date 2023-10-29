import React  from 'react';
import './Confirma.css';

function Confirma() {

  return (
    <div className="telaconfirma">
      <div className="msgemail">
            <p>
            Esse é o endereço de e-mail do seu novo amigo universitário :) .
            </p>
        </div>

        <div className="endemail">
            <p>
            toto@univesp.br
            </p>
        </div>
{/*
        <div className='buttondiv1'>
            <button className="button1" type="submit">Enviar e-mail</button>
        </div>
*/}
        <div className="instrucont">
          <ul id='intlist'>
            <p>Instruções de contato:</p>
            <p>Seja cordial e empático, trate os seus colegas como gostaria de ser tratado.</p>
            <p>Utilize apenas meios de contato que mantenham registro das conversas.</p>
            <p>Não compartilhe ou utilize as informações trocadas para qualquer outra finalidade que não seja a comunicação com o seu colega.</p>
            <p>Observe e siga as normas da sua universidade.</p>
            <p>Este site não substitui os meios de comunicação oficiais da sua universidade.</p>
          </ul>
        </div>
    </div>
    )
  }

export default Confirma;