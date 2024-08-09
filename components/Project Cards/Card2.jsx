import React from 'react';
import './Card2.css'; // Import the custom CSS file

const Card2 = () => {
  return (
    <div className="card2-container">
      <h2 className="card2-title">Pygame Projectile Motion</h2>
      <p className="card2-description">
        This project simulates projectile motion using Pygame, a popular Python library for game development. 
        The simulation illustrates how various forces, such as gravity and initial velocity, affect the trajectory 
        of a projectile. Users can adjust parameters to see how different variables change the path of the projectile.
      </p>
      <img 
        src="/images/projectile.gif" 
        alt="Projectile Motion Simulation" 
        className="card2-image" 
      />
      <p className="card2-description">
        This project was made for my Physics final, where I created a simulation environment. The entire project 
        was developed using Python, specifically with Pygame.
      </p>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        <button className="learn-more-button">Learn More</button>
      </a>
    </div>
  );
};

export default Card2;
