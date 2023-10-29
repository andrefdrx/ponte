import React, { useRef }  from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import './Cadastrar.css';

{/*
import Navbar from './components/Navbar';
import PreviewImage from './components/PreviewImage.js';
import * as yup from "yup";
{/*{values.file && <PreviewImage file={values.file} />}
<button className="button2" type="submit">Excluir Perfil</button> 

*/}

function Cadastrar() {

    const clickCad = (values) => console.log(values);
    
    {/*

      axios.post("url", {
        input: values.input
        cadajuda: values.cadajuda
        cadnome: values.cadnome
        cademail: values.cademail
        cadsenha: values.cadsenha
        cadinst: values.cadinst
        cadcurso: values.cadcurso
        cadano: values.cadano
        cadpolo: values.cadpolo
        cadbio: values.cadbio
      })

    */}

    const fileRef = useRef(null);

  return (
    <div className="telacadastro">
      <Formik initialValues={{
        file: null,
      }} 
      onSubmit={(values) => {
        console.log(values);
      }} 
      >
      {({ values, setFieldValue }) => (
        <div className='cadastro'>
          <Form className="cadastro-form">
              <input
                class="input"
                ref={fileRef}
                type="file" 
                className="form-field1" 
                placeholder="Clique para carregar uma imagem" 
                onChange={(event) => {
                  setFieldValue("file", event.target.files[0]);
                }}
              />
              {/*{values.file && <PreviewImage file={values.file} />}
              <button onClick={()=> {
                fileRef.current.click();
              }}>Upload</button>*/}
              <Field as="select" name="cadajuda" className="form-field2" placeholder="Selecione uma opção">
                  <option value="">Selecione uma opção</option>
                  <option value="Quero acolher estudantes">Quero acolher estudantes</option>
                  <option value="Quero ser acolhido">Quero ser acolhido</option>
                  <option value="Ambas as opções">Ambas as opções</option>
              </Field>    
              <Field name="cadnome" className="form-field3" placeholder="Nome"/>
              <Field name="cademail" className="form-field4" placeholder="Email"/>
              <Field name="cadsenha" className="form-field5" placeholder="Senha"/>
              <Field name="cadinst" className="form-field6" placeholder="Instituição de ensino"/>
              <Field name="cadcurso" className="form-field7" placeholder="Curso"/>
              <Field name="cadano" className="form-field8" placeholder="Ano de ingresso"/>
              <Field name="cadpolo" className="form-field9" placeholder="Polo"/>
              <Field name="cadbio" className="form-field10" placeholder="Escreva uma breve descrição sobre você, hobbies, interesses, etc..."/>
              <button className="button1" type="submit">Salvar</button>
              <div className='aviso'>
                <ul id='avi'>
                  <li><Link to="/Info">Ao clicar em salvar você aceita os termos de uso. Clique aqui para ler.</Link></li>
                </ul>  
              </div>
          </Form>
        </div>
        )}
      </Formik>
      
    </div>
    )
  }

export default Cadastrar;
