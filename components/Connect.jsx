import React from 'react';
import './Connect.css'; // Import the custom CSS file for Connect

const Connect = () => {
  return (
    <section className="connect-section">
      <div className="connect-container">
        <h2 className='title'>LET'S CONNECT</h2>
        <div className="contact-row popout">
          <img src="./icons/white-mail.png" alt="Email" className="contact-icon" />
          <a href="mailto:bilalkhaninbox2004@gmail.com" className="contact-text">bilalkhaninbox2004@gmail.com</a>
        </div>
        <div className="contact-row popout">
          <img src="./icons/white-linkedin.png" alt="LinkedIn" className="contact-icon" />
          <a href="https://www.linkedin.com/in/bilal-khan-bb8688221/" target="_blank" rel="noopener noreferrer" className="contact-text">Bilal Khan</a>
        </div>
        <div className="contact-row popout">
          <img src="./icons/white-github.png" alt="GitHub" className="contact-icon" />
          <a href="https://github.com/Vibertexs" target="_blank" rel="noopener noreferrer" className="contact-text">Vibertexs</a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
