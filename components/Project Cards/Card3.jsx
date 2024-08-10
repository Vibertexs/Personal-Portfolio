import React from 'react';
import './Card3.css';

const Card3 = () => {
  return (
    <div className="card3-container">
      <h2 className="card3-title">Parkinson's Disease Prediction Using Hand Drawings</h2>
      <p className="card3-description">
        This project utilizes TensorFlow to predict Parkinson's disease based on hand-drawn images. The model is trained on a dataset of hand-drawn images to classify and predict the likelihood of Parkinson's disease. By leveraging deep learning techniques, the project aims to provide a tool for early detection and diagnosis.
      </p>
      <p className="card3-description">
        <strong>Project Overview:</strong> The approach involves using Convolutional Neural Networks (CNNs) to analyze hand-drawn images. The CNN model is trained on a dataset to recognize patterns and anomalies associated with Parkinson's disease.
      </p>
      <div className="card3-results">
        <h3 className="card3-title-left">Results:</h3>
        <img 
          src="./images/results.png" 
          alt="Parkinson's Prediction Results" 
          className="card3-results-image"
        />
        <p className="card3-description">
          The results show the model's accuracy and the effectiveness of the prediction based on the hand-drawn images. The model demonstrates a promising accuracy rate, indicating its potential utility in real-world applications for early Parkinson's detection.
        </p>
      </div>
      <a href="https://github.com/Vibertexs/Tensorflow-Projects/blob/main/Parkinson_Prediction_Using_Hand_Drawing.ipynb" target="_blank" rel="noopener noreferrer">
        <button className="learn-more-button popout">LEARN MORE</button>
      </a>
    </div>
  );
};

export default Card3;
