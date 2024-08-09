// components/Skills.jsx
import './Skills.css'; // Import the custom CSS file

const Skills = () => {
  return (
    <div id='skills' className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-12 top-div">
          <h2 className="text-center raleway bold-weight">SKILLS</h2>
    
        
        </div>
      </div>
      <div className="row no-gutters">
        {/* left div */}
        <div className="col-md-6 left-div d-flex flex-column align-items-center">
        <div className='title'>
          <h3 className="raleway bold-weight">FRONT-END</h3>
          </div>

          
          <div className="row w-100 row1">
            <div className="col-6 text-center skill-item">
              <img src="/icons/html5.png" alt="HTML5" className="skill-icon" />
              <p className="montserrat">HTML5</p>
            </div>
            <div className="col-6 text-center skill-item">
              <img src="/icons/css3.png" alt="CSS3" className="skill-icon" />
              <p className="montserrat">CSS3</p>
            </div>
          </div>
          <div className="row w-100 row2">
            <div className="col-6 text-center skill-item">
              <img src="/icons/javascript.png" alt="JavaScript" className="skill-icon" />
              <p className="montserrat">JAVASCRIPT</p>
            </div>
            <div className="col-6 text-center skill-item">
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
            <div className="col-6 text-center skill-item">
              <img src="/icons/c++.png" alt="C++" className="skill-icon" />
              <p className="montserrat">C++</p>
            </div>
            <div className="col-6 text-center skill-item">
              <img src="/icons/python.png" alt="Python" className="skill-icon" />
              <p className="montserrat">PYTHON</p>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-6 text-center skill-item">
              <img src="/icons/tensorflow.png" alt="Tensorflow" className="skill-icon" />
              <p className="montserrat">TENSORFLOW</p>
            </div>
            <div className="col-6 text-center skill-item">
              <img src="/icons/pinescript.png" alt="Pinescript" className="skill-icon" />
              <p className="montserrat">PINESCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
