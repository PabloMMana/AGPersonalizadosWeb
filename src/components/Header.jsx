import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.85)', 
      backdropFilter: 'blur(10px)', /* Efeito vidro fosco moderno */
      boxShadow: '0 1px 10px rgba(0,0,0,0.05)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100 
    }}>
      <div className="container" style={{ fontFamily: "'Fredoka', sans-serif",display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 2rem' }}>
        
        {/* Logo e Nome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img 
            src={logoImg} 
            alt="Logo AG Personalizados" 
            style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0052cc' }} 
          />
          <h1 style={{ fontFamily: 'Caveat', fontSize: '2.3rem', fontWeight: '800', color: '#014e24', margin: 0 }}>
            AG <span style={{ fontSize: '1.3rem',color: '#cc0000'}}>Personalizados</span>
          </h1>
          </div>

        {/* Menu Interativo */}
        <nav>
          <ul style={{ fontFamily: "'Fredoka', sans-serif",display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
            <li><a href="#produtos" className="nav-link" style={{ fontWeight: '600', color: '#475569', fontSize: '0.95rem' }}>Produtos</a></li>
            <li><a href="#sobre" className="nav-link" style={{ fontWeight: '600', color: '#475569', fontSize: '0.95rem' }}>Sobre Nós</a></li>
            <li><a href="#contato" style={{ fontWeight: '600', color: '#0052cc', fontSize: '0.95rem', border: '1px solid #0052cc', padding: '0.4rem 1rem', borderRadius: '20px' }}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}