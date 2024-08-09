import React from "react";

// import "./Card1.css";

const Card1 = () => {
  return (
    <div className="card-container open">
      <div className="card-header">
        <h2>Robot Genetic Algorithm Simulation</h2>
      </div>
      <div className="card-content">
        <section>
          <h3>Project Background</h3>
          <p>
            This project was developed as part of an advanced course on Artificial Intelligence, 
            where the primary objective was to explore the practical implementation of genetic algorithms 
            for solving complex problems. The focus was on simulating a population of robots that evolve over 
            time to optimize their behavior within a 10x10 grid environment.
          </p>
        </section>
        <section>
          <h3>Genetic Algorithm Implementation</h3>
          <p>
            The genetic algorithm was the core of this simulation. It involved the following key processes:
          </p>
          <ul>
            <li>
              <strong>Selection:</strong> The robots with the highest fitness scores were selected to reproduce. 
              Fitness was determined by how well a robot navigated the grid and collected batteries.
            </li>
            <li>
              <strong>Crossover:</strong> Selected robots exchanged portions of their "genes" (represented as binary strings), 
              creating new offspring that combined traits from both parents.
            </li>
            <li>
              <strong>Mutation:</strong> Occasionally, a random bit in the offspring's genetic code would be flipped, introducing 
              variability and helping the population to avoid local maxima.
            </li>
          </ul>
          <p>
            Below is a basic representation of the genetic algorithm's workflow:
          </p>
          <div className="code-snippet">
            <pre>
{`// Pseudo-code for genetic algorithm
for each generation:
    evaluate fitness of all robots
    select top-performing robots
    perform crossover to create offspring
    apply mutation to offspring
    replace old generation with new generation
repeat until stopping condition is met`}
            </pre>
          </div>
        </section>
        <section>
          <h3>Learning Outcomes</h3>
          <p>
            This project deepened my understanding of evolutionary algorithms and their application in solving 
            optimization problems. I encountered challenges such as balancing exploration and exploitation within 
            the algorithm, but ultimately, I learned how to fine-tune the parameters to achieve optimal results.
          </p>
        </section>
        <section>
          <h3>Visual Aids</h3>
          <p>
            The following diagram illustrates the genetic algorithm's process as applied in this simulation:
          </p>
          <img src="/path/to/diagram.png" alt="Genetic Algorithm Flowchart" className="project-diagram" />
          <p>
            Below is a screenshot of the robot simulation in action:
          </p>
          <img src="/path/to/simulation-screenshot.png" alt="Robot Simulation" className="project-screenshot" />
        </section>
        <section>
          <h3>Future Work</h3>
          <p>
            The project has the potential for further refinement. Future work could involve optimizing the mutation 
            rate or incorporating more complex environments. Additionally, applying this algorithm to real-world 
            robotic systems could be an interesting avenue for exploration.
          </p>
        </section>
        <section>
          <h3>Conclusion</h3>
          <p>
            This simulation demonstrated the power of genetic algorithms in evolving robot behaviors over time. 
            The project not only enhanced my programming skills but also provided insight into the mechanics 
            of evolutionary computing.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Card1;
