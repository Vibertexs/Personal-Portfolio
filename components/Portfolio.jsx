import React, { useEffect, useState } from 'react';
import './Portfolio.css'; // Import the custom CSS file for Portfolio

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="portfolio-container">
      <h2 className='raleway bold-weight portfolio-title'>RESUME</h2>
      {isClient ? (
        <>
          <div className="pdf-wrapper" id='resume'>
            <div className="pdf-content">
              <iframe 
                src="/documents/Bilal Khan Resume 2024.pdf" 
                className="pdf-viewer"
                title="Embedded PDF"
              >
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href="/documents/Bilal Khan Resume 2024.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>.
              </iframe>
              <a href="/documents/Bilal Khan Resume 2024.pdf" target="_blank" rel="noopener noreferrer">
                <button className="download-button desktop-only popout">Open PDF Separately</button>
              </a>
            </div>
          </div>
          <div className="mobile-button">
            <a href="/documents/Bilal Khan Resume 2024.pdf" target="_blank" rel="noopener noreferrer" className="view-resume-button">View Resume Externally</a>
          </div>
        </>
      ) : (
        <div className="loading">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Portfolio;
