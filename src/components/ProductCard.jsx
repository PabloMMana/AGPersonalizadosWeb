import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ image, title, description }) {
  // Substitua pelo número real da AG Personalizados (DDD + Número)
  const whatsappNumber = "5511999999999"; 
  const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto personalizado: ${title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ color: '--gray', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{description}</p>
        
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: 'var(--primary)', color: '#fff', padding: '0.75rem', borderRadius: '6px', fontWeight: 'bold', textAlign: 'center', transition: 'background 0.2s' }}>
          <ShoppingCart size={18} />
          Encomendar no WhatsApp
        </a>
      </div>
    </div>
  );
}