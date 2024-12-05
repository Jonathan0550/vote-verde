import React from 'react';
import './Educacional.css';
import { useNavigate } from 'react-router-dom';
import card1 from './card1.png';
import card2 from './card2.png';
import card3 from './card3.png';
import card4 from './card4.png';

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

const EducacionalTextSection = () => (
  <section className="educacional-text-section">
    <h1>Por Que Sustentabilidade Importa?</h1>
    <p>Saiba mais sobre os assuntos e se envolva com as causas</p>
  </section>
);

const EducacionalCard = ({ title, text, image }) => (
  <div className="educacional-card">
    <div className="educacional-card-image" style={{ backgroundImage: `url(${image})` }}>
      <h3>{title}</h3>
    </div>
    <div className="educacional-card-content">
      <p>{text}</p>
      <button className="educacional-button-saiba-mais">Saiba mais</button>
    </div>
  </div>
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

const Educacional = () => (
  <div className="educacional-container">
    <EducacionalHeader />
    <EducacionalTextSection />
    <main className="educacional-cards-section">
      <EducacionalCard 
        title="Por Que Precisamos de Políticas Públicas Sustentáveis?" 
        text="As políticas públicas voltadas para a sustentabilidade são essenciais para enfrentar as crises ambientais e climáticas que vivemos. Governantes que priorizam o investimento em energias renováveis e o manejo adequado de resíduos promovem a qualidade de vida e a preservação de recursos naturais. " 
        image={card1}
      />
      <EducacionalCard 
        title="A Importância do Voto Consciente nas Eleições" 
        text="As eleições são o momento em que cada cidadão tem o poder de influenciar diretamente o futuro do país. Ao escolher candidatos com propostas sustentáveis, você está ajudando a construir uma sociedade mais justa e responsável. Políticas que priorizam o meio ambiente geram impactos positivos que vão desde a economia de energia até a saúde pública. Faça sua parte e vote por um mundo melhor." 
        image={card2}
      />
      <EducacionalCard 
        title="Benefícios da Energia Limpa para a Sociedade" 
        text="A transição para fontes de energia limpa, como o biogás, traz benefícios econômicos e sociais. Além de gerar empregos no setor de energias renováveis, essas iniciativas reduzem custos com saúde pública, já que diminuem a poluição atmosférica e melhoram a qualidade do ar. Investir em biogás e outros tipos de energia renovável é investir em um país mais saudável e sustentável." 
        image={card3}
      />
      <EducacionalCard 
        title="O Poder do Biogás na Transformação das Cidades" 
        text="Com a criação de usinas de biogás, é possível transformar resíduos orgânicos em energia limpa. Essa solução sustentável ajuda a reduzir a poluição, diminuir o volume de lixo nos aterros e gerar eletricidade de forma renovável. A adoção de políticas que incentivam o biogás contribui para um futuro mais verde e eficiente, aproveitando o que antes era descartado." 
        image={card4}
      />
    </main>
    <div className="educacional-faixa-verde">
      <p>Quer ajudar de alguma forma? Deixa a gente te ajudar com isso!</p>
      <button className="educacional-button-contato" onClick={() => navigate("/Contato")}>Contato</button>
    </div>
      <Footer/>
  </div>
);

export default Educacional;