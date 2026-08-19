import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'rgba(255, 255, 255, 0.85)', 
      backdropFilter: 'blur(10px)', 
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 1px 10px rgba(0,0,0,0.05)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100,
      width: '100%'
    }}>
      <style>{`
        .header-nav {
          display: flex;
        }
        @media (max-width: 768px) {
          .header-container {
            padding: 0.6rem 1rem !important;
          }
          .header-nav {
            display: none;
          }
        }
      `}</style>

      <div className="header-container" style={{ 
        fontFamily: "'Fredoka', sans-serif", 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0.8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        {/* Logo e Nome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img 
            src={logoImg} 
            alt="Logo AG Personalizados" 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '2px solid #0052cc',
              flexShrink: 0 
            }} 
          />
          <h1 style={{ 
            fontFamily: 'Caveat', 
            fontSize: '1.4rem', 
            fontWeight: '600', 
            color: '#014e24', 
            margin: 0, 
            whiteSpace: 'nowrap'
          }}>
            AG <span style={{ fontSize: '1.4rem', color: '#cc0000' }}>Personalizados</span>
          </h1>
        </div>

        {/* Menu Interativo */}
        <nav className="header-nav">
          <ul style={{ 
            fontFamily: "'Fredoka', sans-serif", 
            display: 'flex', 
            alignItems: 'center',
            listStyle: 'none', 
            gap: '2rem', 
            margin: 0, 
            padding: 0 
          }}>
            <li><a href="#produtos" className="nav-link" style={{ fontWeight: '600', color: '#475569', fontSize: '0.95rem', textDecoration: 'none' }}>Produtos</a></li>
            <li><a href="#sobre" className="nav-link" style={{ fontWeight: '600', color: '#475569', fontSize: '0.95rem', textDecoration: 'none' }}>Sobre Nós</a></li>
            <li><a href="#contato" style={{ fontWeight: '600', color: '#0052cc', fontSize: '0.95rem', border: '1px solid #0052cc', padding: '0.4rem 1rem', borderRadius: '20px', textDecoration: 'none' }}>Contato</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}