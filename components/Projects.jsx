import './Projects.css'; // Import the custom CSS file
import Cards from "./RenderCards";
import Config from "@/data/config";

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-title raleway bold-weight">PROJECTS</h1>
      <div className='components-holder'>
        <Cards data={Config} />
      </div>
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-link raleway bottom-text"
      >
        FIND MORE BY CLICKING HERE!
      </a>
    </div>
  );
};

export default Projects;
