
import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { MessageSquare } from "lucide-react";
import bannerBg from './assets/banner-produtos.png';
import nossobgCatalogo from './assets/nossocatalogo.png';


// Dados fakes para os produtos (Substitua pelas imagens reais na pasta assets depois)
const PRODUTOS = [
  { id: 1, title: "Canecas de Porcelana", description: "Canecas personalizadas para presentes, empresas ou eventos com alta qualidade de estampa.", image: "public/xicara.png" },
  { id: 2, title: "Copos e Taças", description: "Copos long drink e taças personalizadas ideais para festas, aniversários e casamentos.", image: "public/copo2.png" },
  { id: 3, title: "Camisetas Estampadas", description: "Camisetas com tecidos leves, estampas nítidas e duradouras para uniformes ou uso pessoal.", image: "public/camiseta.png" }
];

export default function App() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
     {/* Hero Section - Apenas com Imagem de Fundo */}
<section style={{ 
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: 'cover',        /* Faz a imagem cobrir toda a área */
  backgroundPosition: 'center',    /* Centraliza a imagem */
  backgroundRepeat: 'no-repeat',
  padding: '6rem 0', 
  textAlign: 'center',
  width: '100%'
}}>
  <div className="container" style={{ maxWidth: '800px' }}>
    
    <h2 style={{ 
      fontFamily: "'Fredoka', sans-serif",
      fontSize: '3.5rem', 
      fontWeight: '700', 
      color: '#1e3a8a', 
      lineHeight: '1.2',
      marginBottom: '1.5rem'
    }}>
      Ideias que viram presentes <span style={{ color: 'var(--accent)' }}>ÚNICOS</span>
    </h2>

    <p style={{ 
      fontSize: '1.25rem', 
      color: '#2d3748', 
      fontWeight: '600', 
      marginBottom: '2.5rem', 
      maxWidth: '650px', 
      margin: '0 auto 2.5rem'
    }}>
      Na AG Personalizados, transformamos suas melhores memórias e ideias em produtos exclusivos de alta qualidade. Canecas, copos, camisetas e muito mais!
    </p>
    
    <a href="#produtos" style={{ 
      backgroundColor: 'var(--accent)', 
      color: '#fff', 
      padding: '1rem 3rem', 
      borderRadius: '30px', 
      fontWeight: 'bold', 
      fontSize: '1.1rem', 
      display: 'inline-block', 
      boxShadow: '0 4px 15px rgba(255, 71, 126, 0.4)'
    }}>
      Ver Catálogo
    </a>

  </div>
</section>

      {/* Grid de Produtos */}
      <section id="produtos" style={{ padding: '4rem 0', 
        backgroundImage: `url(${nossobgCatalogo})`,
        backgroundSize: 'cover',        /* Faz a imagem cobrir toda a área */
        backgroundPosition: 'center',    /* Centraliza a imagem */
        backgroundRepeat: 'no-repeat',
        padding: '6rem 0', 
        textAlign: 'center',
        width: '100%'
        }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontFamily: "'Fredoka', sans-serif",marginBottom: '3rem', fontSize: '2rem' }}> Nosso Catálogo </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {PRODUTOS.map(prod => (
              <ProductCard key={prod.id} title={prod.title} description={prod.description} image={prod.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre/Contato */}
      <section id="sobre" style={{ backgroundColor: '#dbe6f3', padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif",marginBottom: '1rem' }}>Sobre a AG Personalizados</h2>
          <p style={{ color: 'var(--gray)', marginBottom: '2rem' }}>
            Trabalhamos com sublimação e personalização de artigos com total dedicação e cuidado em cada detalhe, garantindo cores vivas e excelente durabilidade para surpreender quem você ama ou promover sua marca.
          </p>
          
          <div id="contato" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'var(--dark)', fontWeight: 'bold', border: '1px solid var(--dark)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
               📸 Instagram
                </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'var(--dark)', fontWeight: 'bold', border: '1px solid var(--dark)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
    👥 Facebook
              </a>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--dark)', color: '#fff', padding: '2rem 0', textAlign: 'center', fontSize: '0.9rem' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AG Personalizados - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}