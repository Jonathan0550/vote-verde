import React from "react";
import './Contato.css';
import { useNavigate } from 'react-router-dom';

const EducacionalHeader = () => {
  const navigate = useNavigate();
  return(
    <header className="educacional-header">
      <div className="educacional-nav-container">
        <div className="educacional-logo">VOTO VERDE</div>
        <nav className="educacional-nav-links">
          <a onClick={() => navigate("/Home")}>Home</a>
          <a onClick={() => navigate("/Candidatos")}>Candidatos</a>
          <a onClick={() => navigate("/Educacional")}>Saiba mais</a>
          <a onClick={() => navigate("/Contato")}>Contato</a>
        </nav>
      </div>
    </header>
);
};

const ContatoForm = () => (
  <form className="contato-form">
    <label htmlFor="nome">Nome *</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
    
    <label htmlFor="email">E-mail *</label>
    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
    
    <label htmlFor="telefone">Telefone *</label>
    <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required />
    
    <label htmlFor="necessidade">Conte sua necessidade *</label>
    <textarea id="necessidade" name="necessidade" placeholder="Digite aqui como podemos lhe ajudar" required />
    
    <button type="submit">Enviar</button>
  </form>
);


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

const Contato = () => (
  <div className="Contato">
    <EducacionalHeader />
    <div className="contato-content">
      <div className="contato-box contato-box-1">
        <p>QUER VOCÊ FAZER A DIFERENÇA?</p>
        <div className="contato-logo">VOTE VERDE</div>
      </div>
      <div className="contato-box contato-box-2">
      </div>
      <div className="contato-box contato-box-3">
        <p>Tem alguma necessidade que gostaria de transformar em proposta?</p>
      </div>
    </div>
    <div className="contato-section">
  <div className="contato-text">
    <h2>Ficou interessado(a)?<br />Compartilhe conosco</h2>
    <p>Preencha o nosso formulário de contato ou entre em contato pelo nosso Whatsapp.</p>
  </div>
  <ContatoForm />
  </div>
    <div className="contato-faixa-verde"></div>
    <Footer />
  </div>
);



export default Contato