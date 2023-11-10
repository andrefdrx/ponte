import React  from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import './Entrar.css';
import logo from './img/logo.png';

{/*

import axios from 'axios';

*/}

function Entrar() {

  const clickEntar = (values) => console.log(values);

{/*

axios.post("url", {
  email: values.email
  senha: values.senha

  
})

*/}

  return (
    <div className="entrar"> 
      <div className="logop">
        <img className='pontelogo' src={logo} alt='Ponte' />      
      </div>

      <div className="intro">
        <p>
          Bem vindo a POnTE! Somos uma comunidade de estudantes de cursos da modalidade EAD dispostos a reduzir distâncias entre alunos. Aqui você será acolhido, poderá trocar ideias e experiências. Vamos lá?
        </p>
      </div>
      
      <Formik initialValues={{}} onSubmit={clickEntar} >
        <Form className="entrar-form">
          <div className="entrar-form-group">
            <Field name="email" className="form-field1" placeholder="Email"/>
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />  
          </div>

          <div className="entrar-form-group">
            <Field name="senha" className="form-field2" placeholder="Senha"/>
            <ErrorMessage
              component="span"
              name="senha"
              className="form-error"
            />  
          </div>
          <button className="button1" type="submit">ENTRAR</button>
          <div className='buttondiv2'>
            <ul id="cadlink">
              <li className="button2"><Link to="/cadastrar">CADASTRAR-SE</Link></li>
            </ul>
          </div>
        </Form>
      </Formik>
      
      
    </div>
 
  )
}

export default Entrar;
