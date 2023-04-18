import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />}/>
          <Route path="/posts" element={<ListaPostagem />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
