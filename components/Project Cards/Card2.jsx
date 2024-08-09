import React from "react";
import "./Card2.css";

const Card2 = () => {
  return (
    <div className="card-container open">
      <div className="card-header">
        <h2>Pygame Projectile Motion Simulation</h2>
      </div>
      <div className="card-content">
        <section>
          <h3>Project Overview</h3>
          <p>
            This project was developed as part of an AP Physics course, where the goal was to simulate projectile motion using Python. Projectile motion is the motion of an object thrown into the air, subject to gravity's acceleration. The path it follows is called its trajectory.
          </p>
        </section>
        <section>
          <h3>Tools and Technologies</h3>
          <p>
            The simulation was implemented using Python 3.6 and the Pygame library, which is typically used for game development but was adapted here for a physics simulation. Other tools and libraries included Numpy for numerical computations, Matplotlib for plotting, and Anaconda with the Spyder IDE for development.
          </p>
          <ul>
            <li><strong>Python:</strong> The programming language used for the simulation.</li>
            <li><strong>Pygame:</strong> A set of modules designed for writing video games, used here to create the simulation environment.</li>
            <li><strong>Numpy:</strong> Used for handling numerical data and calculations.</li>
            <li><strong>Matplotlib:</strong> Employed for plotting graphs and visualizing data.</li>
            <li><strong>Anaconda/Spyder:</strong> Anaconda was used for managing environments, and Spyder was the IDE used for development.</li>
          </ul>
        </section>
        <section>
          <h3>Installation</h3>
          <p>
            To run this program, the following installations are required:
          </p>
          <ul>
            <li><a href="https://www.python.org/downloads/">Python</a></li>
            <li><a href="https://www.anaconda.com/products/individual">Anaconda</a></li>
            <li><code>pip install pygame</code> (Pygame)</li>
            <li><code>python -m pip install -U matplotlib</code> (Matplotlib)</li>
          </ul>
        </section>
        <section>
          <h3>Code Breakdown</h3>
          <p>
            The code for this simulation can be broken down into the following parts:
          </p>
          <ul>
            <li><strong>Initialization:</strong> Imports and variable setup.</li>
            <li><strong>Functions:</strong> Includes classes and methods for drawing projectiles, refreshing the screen, calculating angles, power, displaying stats, flight paths, and boundary checks.</li>
            <li><strong>Runtime:</strong> The main loop where the simulation is executed, handling user input and updating the display.</li>
          </ul>
        </section>
        <section>
          <h3>Learning Outcomes</h3>
          <p>
            Through this project, I gained a deeper understanding of both Python and the physics of projectile motion. The process of breaking down the simulation into manageable components also improved my programming skills, particularly in handling game-like environments and visualizations.
          </p>
        </section>
        <section>
          <h3>Visual Aids</h3>
          <p>
            Below are visual aids that were created to enhance understanding of the simulation:
          </p>
          <img src="/path/to/visual-aid.png" alt="Visual Aid" className="project-visual" />
        </section>
        <section>
          <h3>Conclusion</h3>
          <p>
            This project provided valuable insights into the practical application of physics through programming. It also demonstrated the versatility of Python and Pygame in simulating real-world scenarios.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Card2;
