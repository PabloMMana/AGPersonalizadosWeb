import React from 'react';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--dark)' }}>AG <span style={{ color: 'var(--accent)' }}>Personalizados</span></h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem' }}>
            <li><a href="#produtos" style={{ fontWeight: '500' }}>Produtos</a></li>
            <li><a href="#sobre" style={{ fontWeight: '500' }}>Sobre Nós</a></li>
            <li><a href="#contato" style={{ fontWeight: '500' }}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}