import React from 'react';
import './Home.css';

function Home() {

  return (
    <section id="home" className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">URBAN ONE</h1>
          <p className="hero-subtitle">Form Unspoken.</p>
        </div>
      </div>

      <div className="promo-section">
        <div className="promo-content">
          <h2>LATEST COLLECTION</h2>
          <p>Get your first sale discount up to 45%!</p>
          <a
            className="promo-btn"
            href="#product"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('product');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else window.location.hash = '#product';
            }}
          >
            SEE PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;