import React from 'react';
import './Home.css';
import reciclagem from './reciclagem.png';
import velhaVotando from './velha-votando.png';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();
  return(
  <header className="header">
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
      <h1>Voto Verde: Faça a Diferença com seu Voto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <button onClick={() => navigate('/Educacional')}>Saiba Mais</button>
    </div>
  </header>
);
};



const SustainablePolicies = () => (
  <section className="sustainable-policies">
    <div className="sustainable-header">
      <h2>Descubra como políticas sustentáveis estão transformando nossas cidades!</h2>
    </div>
    <div className="stats">
      <div className="stat">
        <h3>75%</h3>
        <p>Redução de emissão de CO₂</p>
      </div>
      <div className="stat">
        <h3>60%</h3>
        <p>Economia no preço da energia limpa</p>
      </div>
      <div className="stat">
        <h3>40%</h3>
        <p>Crescimento no número de empregos verdes</p>
      </div>
    </div>
  </section>
);

const ImportanceSection = () => (
  <section className="importance">
    <h2>Importância de Votar Verde</h2>
    <div className="content-card with-image">
      <p>
        Escolher candidatos comprometidos com políticas sustentáveis é crucial para garantir um futuro mais saudável e equilibrado para todos. Esses líderes investem em soluções como usinas de biogás, que transformam resíduos em energia limpa, reduzindo o impacto ambiental e melhorando a qualidade de vida. Ao votar consciente, você apoia o desenvolvimento de práticas que preservam recursos naturais e promovem o bem-estar das próximas gerações.
      </p>
      <img src={velhaVotando} alt="Senhora votando" className="content-card-image" />
    </div>
    <div className="content-card no-image">
      <p>
        Ao optar por candidatos com uma agenda sustentável, você também está promovendo inovações que estimulam a economia verde, gerando empregos em setores de energia renovável, reciclagem e conservação ambiental. Esses líderes buscam integrar sustentabilidade em políticas públicas, incentivando práticas de consumo responsável, agricultura regenerativa e mobilidade urbana limpa. Assim, suas ações visam tornar as cidades mais sustentáveis e justas para todos, contribuindo para a preservação do planeta.
      </p>
    </div>
  </section>
);

const CandidatesBanner = () => {
  const navigate = useNavigate();

  return(
  <section className="candidates-banner">
    <div className="text-button-group">
      <h2>Descubra os Candidatos Comprometidos com o Meio Ambiente</h2>
      <button onClick={() => navigate('/candidatos')}>Candidatos</button>
    </div>
    <img src={reciclagem} alt="Reciclagem" className="recycling-icon content-card-image" />
  </section>
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

const Home = () => (
  <div className="App">
    <Header />
    <SustainablePolicies />
    <ImportanceSection />
    <CandidatesBanner />
    <Footer />
  </div>
);

export default Home;
