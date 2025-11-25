import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>URBAN ONE</h1>
          <p>Urbone. Blends contemporary aesthetics with high-quality craftsmanship to redefine modern living. Inspired by the rhythm of the city, our brand delivers refined, functional, and timeless experiences for individuals who seek both style and substance.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>URBONE Ahead</h2>
            <p>
              Our drive is to craft every product with precision, using premium materials and sustainable production methods to ensure an experience that truly satisfies our customers.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Satisfied Customer</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Available Products</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>High Quality</p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h2>Meet the "Behind The Scene"</h2>
          <div className="values-grid">

            <div className="value-card">
              <h3>Valerie Liogu</h3>
              <p>Informatics, 2023</p>
            </div>

            <div className="value-card">
              <h3>Joranzky Kolibu</h3>
              <p>Informatics, 2022</p>
            </div>

            <div className="value-card">
              <h3>Juane Kaindeh</h3>
              <p>Informatics, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;