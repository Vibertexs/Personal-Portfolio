import './About.css'; // Import the custom CSS file

const About = () => {
  return (
    <div id="about" className="about-container d-flex flex-column justify-content-center align-items-center">
      <h2 className='about-title'>ABOUT</h2>
      <p className='about-text'>
        Hello! I'm Bilal Khan, a full-stack developer with a keen interest in creating efficient and innovative solutions. I’m currently studying at Folsom Lake College and planning to transfer next year to pursue a master’s in computer engineering. My goal is to develop programs that drive technological advancement and benefit others.<br /><br />
        Outside of coding, I enjoy photography, fishing, and gaming. Each of these hobbies helps me unwind and sparks my creativity in different ways.
      </p>

      <div className='tldr-container'>
        <h3 className='tldr-title'>TL;DR?</h3>
        <div className='tldr-section'>
          <div className='tldr-item popout'>
            <img src="./icons/stack.png" alt="Full Stack Developer" className="tldr-icon" />
            <div className='subtitle'>FULL STACK</div>
          </div>
          <div className='tldr-item popout'>
            <img src="./icons/goal.png" alt="Goal: Create Impactful Programs" className="tldr-icon" />
            <div className='subtitle'>CREATE IMPACT</div>
          </div>
          <div className='tldr-item popout'>
            <img src="./icons/camera.png" alt="Photography" className="tldr-icon" />
            <div className='subtitle'>PHOTOGRAPHY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
