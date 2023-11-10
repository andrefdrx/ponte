import React  from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Entrar from './Entrar';
import Informa from './Informa';
import Confirma from './Confirma';
import Fimcad from './Fimcad';
import Perfil from './Perfil';
import Cadastrar from './Cadastrar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Entrar />}/>
          <Route path='/ponte' element={<Entrar />}/>
          <Route path='/info' element={<Informa />}/>
          <Route path='/confirma' element={<Confirma />}/>
          <Route path='/fimcad' element={<Fimcad />}/>
          <Route path='/buscar' element={<Perfil />}/>
          <Route path='/cadastrar' element={<Cadastrar />}/>
        </Routes>
      </Router>     
    </div>
  )    
}


export default App;
