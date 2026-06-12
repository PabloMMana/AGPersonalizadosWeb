import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ image, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "5511999999999"; // Coloque seu número aqui
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto personalizado: ${title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: '#fff', 
        borderRadius: '16px', /* Bordas mais arredondadas e amigáveis */
        overflow: 'hidden', 
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)', 
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)', /* EFEITO INTERATIVO DE SUBIR */
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex', 
        flexDirection: 'column'
      }}
    >
      <div style={{ overflow: 'hidden', height: '280px' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', /* Zoom sutil na imagem */
            transition: 'transform 0.3s ease'
          }} 
        />
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
            justify: 'center', 
            gap: '0.5rem', 
            backgroundColor: isHovered ? '#1ebd59' : '#25d366', /* Brilho no botão ao focar */
            color: '#fff', 
            padding: '0.85rem', 
            borderRadius: '12px', 
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)'
          }}
        >
          <ShoppingCart size={18} />
          Encomendar no WhatsApp
        </a>
      </div>
    </div>
  );
}