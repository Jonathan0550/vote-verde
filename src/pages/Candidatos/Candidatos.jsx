import React, { useState } from 'react';
import './Candidatos.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import joao from './joao.png';
import daniel from './daniel.png';
import gilson from './gilson.png';
import dani from './dani.png';
import tecio from './tecio.png';

const Headerc = () => {
  const navigate = useNavigate();
  return(
  <header className="header1">
    <div className="nav-container">
      <div className="logo">VOTO VERDE</div>
      <nav className="nav-links">
        <a onClick={() => navigate("/Home")}>Home</a>
        <a onClick={() => navigate("/Candidatos")}>Candidatos</a>
        <a onClick={() => navigate("/Educacional")}>Saiba mais</a>
        <a onClick={() => navigate("/Contato")}>Contato</a>
      </nav>
    </div>
    <div className="hero-content">
      <h1>Conheça os Candidatos Sustentáveis</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
  </header>
);
};

const candidatos = [
  { nome: 'João Campos', partido: 'PSB (Partido Socialista Brasileiro)', imagem: joao, descricao: 'Descrição do João Campos' },
  { nome: 'Daniel Coelho', partido: 'Partido de Daniel', imagem: daniel, descricao: 'Descrição do Daniel Coelho' },
  { nome: 'Gilson Machado', partido: 'Partido de Gilson', imagem: gilson, descricao: 'Descrição do Gilson Machado' },
  { nome: 'Dani Portela', partido: 'Partido de Dani', imagem: dani, descricao: 'Descrição da Dani Portela' },
  { nome: 'Tecio Teles', partido: 'Partido de Tecio', imagem: tecio, descricao: 'Descrição do Tecio Teles' },
];

const Main = () => {
  const [selectedCandidato, setSelectedCandidato] = useState(candidatos[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    afterChange: index => setSelectedCandidato(candidatos[index]),
  };

  return (
    <main className="candidatos-main">
      <h2>Principais Candidatos</h2>
      <p>Conheça mais sobre quem quer fazer a diferença e não abre mão da sustentabilidade.</p>

    <Slider {...settings}>
    {candidatos.map((candidato, index) => (
    <div key={index} onClick={() => setSelectedCandidato(candidato)}>
      <div className="candidato-img-container">
        <img src={candidato.imagem} alt={candidato.nome} />
      </div>
      <h3>{candidato.nome}</h3>
    </div>
    ))}
    </Slider>

      <div className="candidatos-card-info">
        <h3>Nome: {selectedCandidato.nome}</h3>
        <p>Partido: {selectedCandidato.partido}</p>
        <p>{selectedCandidato.descricao}</p>
        <button>Saiba mais sobre as propostas</button>
      </div>
    </main>
  );
};


const Footer = () => (
  <footer className="footer">
    <div className="footer-section contact">
      <h3>Entre em contato</h3>
      <p><i className="fas fa-phone"></i> (00) 90000-0000</p>
      <p><i className="fas fa-envelope"></i> contato@blablabla.com.org</p>
    </div>
    <div className="footer-section social">
      <h3>Siga-nos</h3>
      <p>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-facebook"></i>
      </p>
    </div>
    <div className="footer-section hours">
      <h3>Atendimento</h3>
      <p>De segunda a sexta das 8h às 12h, e das 14h às 18h.</p>
    </div>
    <div className="footer-section map">
      <img src="map-placeholder.png" alt="Map" />
    </div>
    <div className="footer-section credits">
      <p>© 2024. Todos os direitos reservados.</p>
      <p>Desenvolvido pela Vote Verde</p>
    </div>
  </footer>
);

const Candidatos=() =>(
  <div className="candidatos">
    <Headerc/>
    <Main/>
    <div className="contato-faixa-verde"></div>
    <Footer/>
  </div>
)


export default Candidatos;
