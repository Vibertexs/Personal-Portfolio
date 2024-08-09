// components/Experience.jsx
import './Experience.css'; // Import the custom CSS file

const Experience = () => {
  return (
    <div id='experience' className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 top-div">
          <h2 className="text-center raleway bold-weight">EXPERIENCE</h2>
        </div>
      </div>

      {/* New section for Places I've Worked */}
      <div className="row no-gutters">
        <div className="col-12 experiencetab">
          <h2 className="subtitle raleway bold-weight">PLACES I'VE WORKED</h2>
        </div>
        <div className="col-12 d-flex flex-row justify-content-around company-row">
          <a href="https://www.linkedin.com/company/neuroleap-corp/" target="_blank" rel="noopener noreferrer" className="work-item text-center popout">
            <img src="/icons/neuroleap.png" alt="NeuroLeap" className="company-icon" />
            <h4 className="raleway">NEUROLEAP</h4>
            <p className="montserrat">2022 - 2023</p>
          </a>
          <a href="https://bayvalleytech.com" target="_blank" rel="noopener noreferrer" className="work-item text-center popout">
            <img src="/icons/BVT.png" alt="Bay Valley Tech" className="company-icon" />
            <h4 className="raleway">BAY VALLEY TECH</h4>
            <p className="montserrat">2023 - 2024</p>
          </a>
        </div>
      </div>

      {/* Subtitle for Technologies I've Worked With */}
      <div className="row no-gutters">
        <div className="col-12 ">
          <h2 className="subtitle raleway bold-weight">TECHNOLOGIES I'VE WORKED WITH</h2>
        </div>
      </div>

      <div className="row no-gutters">
        {/* left div */}
        <div className="col-md-6 left-div d-flex flex-column align-items-center">
          <div className='title'>
            <h3 className="raleway bold-weight ">FRONT-END</h3>
          </div>
          <div className="row w-100 row1">
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/html5.png" alt="HTML5" className="skill-icon" />
              <p className="montserrat">HTML5</p>
            </div>
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/css3.png" alt="CSS3" className="skill-icon" />
              <p className="montserrat">CSS3</p>
            </div>
          </div>
          <div className="row w-100 row2">
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/javascript.png" alt="JavaScript" className="skill-icon" />
              <p className="montserrat">JAVASCRIPT</p>
            </div>
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/react.png" alt="React" className="skill-icon" />
              <p className="montserrat">REACT</p>
            </div>
          </div>
        </div>

        {/* right div */}
        <div className="col-md-6 right-div d-flex flex-column align-items-center">
          <div className='title'>
            <h3 className="raleway bold-weight">BACK-END</h3>
          </div>
          <div className="row w-100">
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/c++.png" alt="C++" className="skill-icon" />
              <p className="montserrat">C++</p>
            </div>
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/python.png" alt="Python" className="skill-icon" />
              <p className="montserrat">PYTHON</p>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/tensorflow.png" alt="Tensorflow" className="skill-icon" />
              <p className="montserrat">TENSORFLOW</p>
            </div>
            <div className="col-6 text-center skill-item popout">
              <img src="/icons/pinescript.png" alt="Pinescript" className="skill-icon" />
              <p className="montserrat">PINESCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
