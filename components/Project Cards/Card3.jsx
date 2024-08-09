import React from "react";
import "./Card3.css";

const Card3 = () => {
  return (
    <div className="card-container open">
      <div className="card-header">
        <h2>Parkinson's Detection Using Hand Drawing Analysis</h2>
      </div>
      <div className="card-content">
        <section>
          <h3>Project Background</h3>
          <p>
            This project focuses on developing a machine learning model to detect Parkinson's disease based on hand-drawn patterns. 
            Using TensorFlow, the project aims to analyze the drawings of spirals and waves, which can be indicative of motor function impairment—a common symptom of Parkinson's.
          </p>
        </section>
        <section>
          <h3>Data Collection</h3>
          <p>
            The dataset comprises hand-drawn spirals and waves from both healthy individuals and Parkinson's patients. 
            These drawings were converted into image data, which served as the input for training the machine learning model.
          </p>
        </section>
        <section>
          <h3>Model Architecture</h3>
          <p>
            The model used a Convolutional Neural Network (CNN) to extract features from the images. 
            Key layers in the model included:
          </p>
          <ul>
            <li><strong>Convolutional Layers:</strong> Extracted spatial features from the input images.</li>
            <li><strong>Pooling Layers:</strong> Reduced dimensionality while retaining essential information.</li>
            <li><strong>Fully Connected Layers:</strong> Used for the final classification into healthy or Parkinson's affected.</li>
          </ul>
          <p>
            The model was trained with binary cross-entropy loss and Adam optimizer, allowing for effective learning from the dataset.
          </p>
        </section>
        <section>
          <h3>Training and Evaluation</h3>
          <p>
            The model was trained on a portion of the dataset and evaluated on a separate test set. 
            The following metrics were used to assess the model's performance:
          </p>
          <ul>
            <li><strong>Accuracy:</strong> The percentage of correctly classified images.</li>
            <li><strong>Precision:</strong> The ratio of true positives to the sum of true and false positives.</li>
            <li><strong>Recall:</strong> The ratio of true positives to the sum of true positives and false negatives.</li>
          </ul>
          <p>
            The results indicated that the model was effective in distinguishing between healthy individuals and those with Parkinson's, 
            achieving high accuracy and good generalization on the test set.
          </p>
        </section>
        <section>
          <h3>Visual Aids</h3>
          <p>
            Below is an example of a hand-drawn spiral used in the dataset:
          </p>
          <img src="/path/to/spiral-sample.png" alt="Spiral Drawing Sample" className="project-diagram" />
          <p>
            The confusion matrix below shows the model's performance on the test set:
          </p>
          <img src="/path/to/confusion-matrix.png" alt="Confusion Matrix" className="project-screenshot" />
        </section>
        <section>
          <h3>Future Work</h3>
          <p>
            Future improvements could include:
          </p>
          <ul>
            <li>Increasing the dataset size by collecting more samples.</li>
            <li>Exploring different neural network architectures, such as deeper CNNs or ensemble models.</li>
            <li>Applying the model to real-time hand drawing analysis in clinical settings.</li>
          </ul>
        </section>
        <section>
          <h3>Conclusion</h3>
          <p>
            This project demonstrated the potential of using machine learning and hand-drawn patterns to detect Parkinson's disease. 
            The successful application of CNNs in this context highlights the power of deep learning in medical diagnostics.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Card3;
