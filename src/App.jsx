import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { MessageSquare } from "lucide-react";

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
      <section style={{ backgroundColor: '#fff', padding: '5rem 0', textAlign: 'center', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--dark)' }}>Ideias que viram presentes únicos</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray)', marginBottom: '2rem' }}>
            Na AG Personalizados, transformamos suas melhores memórias e ideias em produtos exclusivos de alta qualidade. Canecas, copos, camisetas e muito mais!
          </p>
          <a href="#produtos" style={{ backgroundColor: 'var(--accent)', color: '#fff', padding: '0.75rem 2rem', borderRadius: '30px', fontWeight: 'bold', display: 'inline-block' }}>
            Ver Catálogo
          </a>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section id="produtos" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Nosso Catálogo</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {PRODUTOS.map(prod => (
              <ProductCard key={prod.id} title={prod.title} description={prod.description} image={prod.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Seção Sobre/Contato */}
      <section id="sobre" style={{ backgroundColor: '#f1f3f5', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Sobre a AG Personalizados</h2>
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