import React from 'react';
import './Card1.css';

const Card1 = () => {
  return (
    <div className="card1-container">
      <h2 className="card1-title">Self-Learning Robot Project</h2>
      <p className="card1-description">
        This project involves a self-learning robot created in C++. It uses an evolutionary algorithm where the robot evolves over time by passing genes to its offspring.
      </p>
      <p className="card1-description">
        <strong>Project Overview:</strong> The robot operates on a 10x10 grid with batteries and has 16 genes determining its movement. The goal is for the robot to collect as many genes as it can and pass its gene down.
      </p>
      <div className="card1-layout">
        <div className="card1-map">
          <h3 className="card1-title-left">Map:</h3>
          <pre>
{`-----------------------------------------
| B |   | B | B |   |   |   | B | B |   |
-----------------------------------------
| R | B |   | B |   | B |   |   | B |   |
-----------------------------------------
|   |   |   |   |   | B | B |   |   |   |
-----------------------------------------
| B | B |   |   |   | R |   | B | B | B |
-----------------------------------------
|   |   |   | B |   | B |   |   |   | B |
-----------------------------------------
|   | B |   | B |   |   | B | B |   | B |
-----------------------------------------
|   |   |   | B |   | B | B | B |   |   |
-----------------------------------------
| B | B |   |   | B |   |   | B | B |   |
-----------------------------------------
|   |   | B | B |   |   | B |   | B | B |
-----------------------------------------
|   |   | B |   |   |   |   |   |   | B |
-----------------------------------------`}
          </pre>
        </div>
        <div className="card1-details">
          <div className="card1-current-state">
            <h3 className="card1-title-left">Robot&apos;s Current State:</h3>
            <pre>
{`|---|---|---|
|   | 2 |   |
|---|---|---|
| 1 | R | 1 |
|---|---|---|
|   | 2 |   |
|---|---|---|`}
            </pre>
          </div>
          <div className="card1-genes">
            <h3 className="card1-title-left">Robot&apos;s Genes:</h3>
            <pre>
{`Gene 0: 0   0   0   0   N
Gene 1: 0   0   0   1   E
Gene 2: 0   0   1   0   S
Gene 3: 0   0   1   1   W
Gene 4: 0   1   0   0   N`}
            </pre>
          </div>
        </div>
      </div>
      <p className="card1-description">
        <strong><br/>Simulating Artificial Intelligence:  </strong> 
         In this project, the robot&apos;s behavior was designed to mimic aspects of artificial intelligence through an evolutionary algorithm. Initially, the robot&apos;s actions were based on random gene configurations, leading to a range of behaviors. Over time, the algorithm selected and bred robots with more effective gene configurations, simulating a learning process. This approach allowed the robots to gradually optimize their performance, adapting their strategies to efficiently collect batteries and navigate the grid. By continually evolving and optimizing their behavior, the robots demonstrated how artificial intelligence techniques can be used to create adaptive and intelligent systems.
      </p>
      <a href="https://github.com/Vibertexs/CPP-Projects/blob/main/FinalProject.cpp" target="_blank" rel="noopener noreferrer">
        <button className="learn-more-button popout">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card1;
