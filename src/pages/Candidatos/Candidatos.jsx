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
  return (
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
        <p>Conheça mais sobre suas propostas de sustentabilidade.</p>
      </div>
    </header>
  );
};

const candidatos = [
  { 
    nome: 'João Campos', 
    partido: 'PSB (Partido Socialista Brasileiro)', 
    imagem: joao, 
    descricaoResumida: 'Propõe programas de reciclagem e incentivo ao transporte público sustentável.', 
    descricaoCompleta: `João Campos propõe:
      • Extensivos programas de reciclagem e conscientização, para reduzir o desperdício e aumentar o aproveitamento de resíduos.
      • Ampliação das faixas para bicicletas e ônibus em centros urbanos, incentivando o transporte sustentável.
      • Transição para energias renováveis, como a criação de usinas solares e eólicas para atender à demanda energética local.
      • Revitalização de áreas degradadas urbanas, transformando-as em novos espaços ecológicos para a população.`
  },
  { 
    nome: 'Daniel Coelho', 
    partido: 'Cidadania', 
    imagem: daniel, 
    descricaoResumida: 'Apoia energia limpa e redução da poluição urbana.', 
    descricaoCompleta: `Daniel Coelho defende:
      • A instalação de painéis solares em edifícios públicos, reduzindo custos e emissões.
      • A mobilidade elétrica, com subsídios para veículos elétricos e criação de estações de carregamento.
      • Políticas para redução do desmatamento, com maior controle das atividades ilegais e recuperação de áreas verdes nas cidades para melhorar a qualidade do ar.`
  },
  { 
    nome: 'Gilson Machado', 
    partido: 'PL (Partido Liberal)', 
    imagem: gilson, 
    descricaoResumida: 'Busca promover a conservação ambiental e zonas verdes em áreas urbanas.', 
    descricaoCompleta: `Gilson Machado propõe:
      • Ecoturismo responsável em áreas naturais, gerando renda e incentivando a conservação ambiental.
      • Reflorestamento de áreas desmatadas para a recuperação dos ecossistemas e controle de enchentes.
      • Programas de reciclagem e reutilização de água, com foco em regiões afetadas pela escassez hídrica.`
  },
  { 
    nome: 'Dani Portela', 
    partido: 'PSOL (Partido Socialismo e Liberdade)', 
    imagem: dani, 
    descricaoResumida: 'A favor de políticas para proteção dos recursos naturais e combate ao desmatamento.', 
    descricaoCompleta: `Dani Portela propõe:
      • Criação de zonas de conservação da biodiversidade urbana, protegendo espécies nativas.
      • Ampliação das cooperativas de reciclagem, gerando emprego e promovendo o manejo responsável de resíduos.
      • Incentivo às hortas comunitárias para uma produção local e sustentável, com impacto direto na segurança alimentar.`
  },
  { 
    nome: 'Tecio Teles', 
    partido: 'Novo', 
    imagem: tecio, 
    descricaoResumida: 'Defende práticas de urbanização sustentável e áreas de preservação.', 
    descricaoCompleta: `Tecio Teles sugere:
      • Expansão de ciclovias e rotas de transporte alternativo nas cidades.
      • Programas de educação ambiental para aumentar a consciência pública sobre sustentabilidade.
      • Incentivos a construções sustentáveis, com uso de materiais ecológicos e sistemas de reaproveitamento de água.`
  },
];

const Main = () => {
  const [selectedCandidato, setSelectedCandidato] = useState(candidatos[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleMoreInfoClick = () => {
    setShowFullDescription(prevShow => !prevShow);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    afterChange: index => {
      setSelectedCandidato(candidatos[index]);
      setShowFullDescription(false); 
    },
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
        <p>
          {showFullDescription 
            ? selectedCandidato.descricaoCompleta 
            : selectedCandidato.descricaoResumida}
        </p>
        <button onClick={handleMoreInfoClick}>
          {showFullDescription ? 'Ver menos' : 'Saiba mais sobre as propostas'}
        </button>
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

const Candidatos = () => (
  <div className="candidatos">
    <Headerc />
    <Main />
    <div className="contato-faixa-verde"></div>
    <Footer />
  </div>
);

export default Candidatos;
