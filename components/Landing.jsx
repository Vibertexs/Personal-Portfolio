// portfolio/components/Landing.jsx
import React from 'react';
import './Landing.css';
import '../app/globals.css';

const Landing = () => {
  return (
    <div className="parent-container">
      <div className="container-fluid p-0">
        <div className="row no-gutters container-height">
          <div className="col-md-8 d-flex justify-content-start align-items-center left">
            <div className="text">
              <div className="top-text">
                <h2 className="light-weight">HELLO, I AM</h2>
              </div>
              <div className="middle-text">
                <h1 className="bold-weight">BILAL KHAN</h1>
              </div>
              <div className="bottom-text">
                <h3 className="light-weight">FULLSTACK DEVELOPER</h3>
              </div>
              <div className="icons d-flex">
                <a href="https://github.com/Vibertexs" target="_blank" rel="noopener noreferrer">
                  <img src="./icons/github.png" alt="GitHub" className="icon popout" />
                </a>
                <a href="https://www.linkedin.com/in/bilal-khan-bb8688221/" target="_blank" rel="noopener noreferrer">
                  <img src="./icons/linkedin.png" alt="LinkedIn" className="icon popout" />
                </a>
                <a href="mailto:bilalkhaninbox2004@gmail.com">
                  <img src="./icons/email.png" alt="Email" className="icon popout" />
                </a>
              </div>
            </div>
          </div>
          {/* The right column will be hidden on screens smaller than md (768px) */}
          <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center right">
            {/* The image will now be the background of this div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
