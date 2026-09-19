import React, { useState } from 'react';
// Importamos o ShoppingCart e adicionamos o X para fechar a galeria
import { ShoppingCart, X } from 'lucide-react';

export default function ProductCard({ image, title, description, fotosDemonstracao = [] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar o modal

  const whatsappNumber = "5511973117859"; // Coloque seu número real aqui
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto personalizado: ${title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {/* Card do Produto */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          backgroundColor: '#fff', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)', 
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', 
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', 
          flexDirection: 'column'
        }}
      >
        {/* Div da Imagem - Agora ao clicar ela ativa o Modal */}
        <div 
          onClick={() => setIsModalOpen(true)}
          style={{ overflow: 'hidden', height: '280px', cursor: 'pointer', position: 'relative' }}
          title="Clique para ver modelos de demonstração"
        >
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
              transition: 'transform 0.3s ease'
            }} 
          />
          {/* Efeito visual de legenda fluida que avisa o usuário para clicar */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: isHovered ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.2s ease',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            Ver Amostras 🔍
          </div>
        </div>
        
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600', color: '#1e293b' }}>{title}</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.5rem', 
              backgroundColor: isHovered ? '#1ebd59' : '#25d366', 
              color: '#fff', 
              padding: '0.85rem', 
              borderRadius: '12px', 
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
              textDecoration: 'none'
            }}
          >
            <ShoppingCart size={18} />
            Encomendar no WhatsApp
          </a>
        </div>
      </div>

      {/* JANELA FLUTUANTE DA GALERIA (MODAL) */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            {/* Botão X para fechar */}
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                border: 'none',
                background: '#e2e8f0',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#475569',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#cbd5e1'}
              onMouseLeave={(e) => e.target.style.background = '#e2e8f0'}
            >
              <X size={18} />
            </button>

            <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', color: '#1e3a8a', marginBottom: '0.5rem' }}>
              Modelos de {title}
            </h3>
            <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Veja abaixo algumas variações e ideias de personalizações que já preparamos:
            </p>

            {/* Grid interna das fotos extras */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem' 
            }}>
              {fotosDemonstracao.map((foto, index) => (
                <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', height: '200px', backgroundColor: '#f8fafc' }}>
                  <img 
                    src={foto} 
                    alt={`Amostra ${index}`} 
                    style={{ width: '100%',maxWidth: '160px', height: '140px', height: '100%', objectFit: 'cover' }} 
                    onError={(e) => {
                      // Caso a imagem de exemplo não exista ainda, coloca um placeholder cinza amigável
                      e.target.src = "https://placehold.co/400x400/e2e8f0/475569?text=AG+Personalizados";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}