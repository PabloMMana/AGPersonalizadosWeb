import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { MessageSquare } from "lucide-react";
import bannerBg from './assets/banner-produtos.png';
import nossobgCatalogo from './assets/nossocatalogo.png';


// Atualizado: adicionado o array de fotos extras para a galeria demonstrativa de cada item
const PRODUTOS = [
  { 
    id: 1, 
    title: "Canecas de Porcelana", 
    description: "Canecas personalizadas para presentes, empresas ou eventos com alta qualidade de estampa.", 
    image: "/canecas/xicara.png",
    fotosDemonstracao: [
      "/canecas/xicara.png", // Imagem principal
      "/canecas/xicara1.png", // Substitua pelos caminhos das suas fotos reais
      "/canecas/xicara2.png"]
  },
  { 
    id: 2, 
    title: "Copos e Taças", 
    description: "Copos long drink e taças personalizadas ideais para festas, aniversários e casamentos.", 
    image: "/copos/copo2.png",
    fotosDemonstracao: [
      "/copos/copo2.png",
      "/copos/copo3.png",
      "/copos/copo3.png"
      
    ]
  },
  { 
    id: 3, 
    title: "Camisetas Estampadas", 
    description: "Camisetas com tecidos leves, estampas nítidas e duradouras para uniformes ou uso pessoal.", 
    image: "/camisetas/camiseta.png",
    fotosDemonstracao: [
      "/camisetas/camiseta.png",
      "/camisetas/camiseta1.png"
    ]
  },
   { 
  id: 4, 
  title: "Caixas, Sacolas e Embalagens para presentes", 
  description: "Criamos embalagens e sacolas personalizadas em papel...   Pedido a partir de 10 unidades", 
  image: "/sacolas/Sacola.jpg",
  fotosDemonstracao: [
    { url: "/sacolas/sacola1.jpeg", legenda: "Sacola em branco, offset 170g - Kraft com alça de cordão" },
    { url: "/sacolas/sacola2.jpeg", legenda: "Sacola personalizada com logo, offset 170g - Kraft com alça de cordão" },
    { url: "/sacolas/sacola3.jpeg", legenda: "Sacola com logotipo, offset 170g - Kraft e com boca de palhaçinho.  " },
    { url: "/sacolas/sacola4.jpeg", legenda: "Sacola personalizada com logo, offset 170g - Kraft com alça de cordão" }
  ]
}
];

export default function App() {
  return (
    <div>
      <Header />

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
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '1.25rem', 
            color: '#230479', 
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
      <section id="produtos" style={{ 
        backgroundImage: `url(${nossobgCatalogo})`,
        backgroundSize: 'cover',        /* Faz a imagem cobrir toda a área */
        backgroundPosition: 'center',    /* Centraliza a imagem */
        backgroundRepeat: 'no-repeat',
        padding: '6rem 0', 
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontFamily: "'Fredoka', sans-serif", marginBottom: '3rem', fontSize: '3rem', color: '#1c0279' }}> Nosso Catálogo </h2>
     
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
             {PRODUTOS.map(prod => (           
              <ProductCard 
                key={prod.id} 
                title={prod.title} 
                description={prod.description} 
                image={prod.image}                
                fotosDemonstracao={prod.fotosDemonstracao} /* Alteração: Passando a lista de fotos para o Card */
              />
            ))}
          </div>
        </div>

       
      </section>

      {/* Seção Sobre/Contato */}
      <section id="sobre" style={{  
        backgroundColor: '#dbe6f3', 
        padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", marginBottom: '1rem' }}>Sobre a AG Personalizados</h2>

          <p style={{ color: 'var(--gray)', 
            marginBottom: '2rem'}}>
            Trabalhamos com sublimação e personalização de artigos com total dedicação e cuidado em cada detalhe, garantindo cores vivas e excelente durabilidade para surpreender quem você ama ou promover sua marca.
           </p>
           <p> Telefone para contato: (11) 97311-7859</p>
          
          <div id="contato" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://www.instagram.com/agpersonalizados_oficial/" target="_blank" rel="noreferrer" style={{ color: 'var(--dark)', fontWeight: 'bold', border: '1px solid var(--dark)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
              📸 Instagram
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