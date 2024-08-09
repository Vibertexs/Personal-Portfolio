import React, { useEffect, useState } from 'react';
import './Contact.css'; // Import the custom CSS file

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="contact-container">
      <h2 className='raleway bold-weight portfolio-title'>PORTFOLIO</h2>
      {isClient ? (
        <div className="pdf-wrapper" id='resume'>
          <iframe 
            src="/documents/Bilal Khan Resume 2024.pdf" 
            className="pdf-viewer"
            title="Embedded PDF"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/documents/Bilal Khan Resume 2024.pdf">Download PDF</a>.
          </iframe>
        </div>
      ) : (
        <div className="loading">
          Loading...
        </div>
      )}
      <div className="connect-container" id='connect'>

        <h2 className='title'>LET'S CONNECT</h2>

        <div className="contact-row">
          <img src="/icons/email.png" alt="Email" className="contact-icon" />
          <a href="mailto:bilalkhaninbox2004@gmail.com" className="contact-text">bilalkhaninbox2004@gmail.com</a>
        </div>
        <div className="contact-row">
          <img src="/icons/linkedin.png" alt="LinkedIn" className="contact-icon" />
          <a href="https://www.linkedin.com/in/bilal-khan-bb8688221/" className="contact-text">Bilal Khan</a>
        </div>
        <div className="contact-row">
          <img src="/icons/github.png" alt="GitHub" className="contact-icon" />
          <a href="https://github.com/Vibertexs" className="contact-text">Vibertexs</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
