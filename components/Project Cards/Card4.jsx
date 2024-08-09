import React from 'react';
import './Card4.css';

const Card4 = () => {
  return (
    <div className="card4-container">
      <h2 className="card4-title">Scalping Bot 1.0</h2>
      <p className="card4-description">
        The Scalping Bot 1.0 strategy is designed for scalping in financial markets, specifically for XAUUSD. It aims to pass prop firm challenges quickly using multiple technical indicators.
      </p>
      <p className="card4-description">
        <strong>Key Components:</strong>
      </p>
      <ul className="card4-list">
        <li><strong>Super Trend:</strong> Identifies short-term trend direction with three indicators for accurate signals.</li>
        <li><strong>Laguerre Filter:</strong> Provides long-term trend confirmation.</li>
        <li><strong>RSI Range Identifier:</strong> Helps in determining trend direction and identifying ranging market conditions.</li>
        <li><strong>Position Logic:</strong> Rules for entering and exiting positions based on indicators.</li>
        <li><strong>Trade Size Logic:</strong> Determines trade size based on account balance and risk percentage.</li>
      </ul>

      <h3 className="card4-title-left">Parameters</h3>
      <p className="card4-description">
        The strategy allows customization of various input parameters, including:
      </p>
      <ul className="card4-list">
        <li>Super Trend settings</li>
        <li>HMA parameters</li>
        <li>RSI settings</li>
        <li>Risk management settings</li>
      </ul>
      <p className="card4-description">
        Adjust these parameters according to your trading preferences and risk tolerance.
      </p>

      <h3 className="card4-title-left">Results and Performance</h3>
      <p className="card4-description">
        The Scalping Bot 1.0 strategy has shown profitable results under specific market conditions. It performs well during high volatility periods when the indicators provide clear signals.
      </p>
      <p className="card4-description">
        <strong>Profitable Conditions:</strong>
      </p>
      <ul className="card4-list">
        <li>Markets with high volatility and clear trends.</li>
        <li>Periods where technical indicators align for strong signals.</li>
        <li>Low spread environments to reduce transaction costs.</li>
      </ul>

      <p className="card4-description">
        <br />Through the default settings which were optimized for XAUUSD. these were the results:
      </p>
      <div className="card4-results-image-container">
        <img 
          src="/images/scalpingbotresults.jpg" 
          alt="Scalping Bot Strategy Results"
          className="card4-results-image"
        />
      </div>
    <br />
      <h3 className="card4-title-left">Important Notes</h3>
      <p className="card4-description">
        The Scalping Bot 1.0 strategy is designed for educational and experimental purposes. Trading involves risks, and it’s important to thoroughly test the strategy on historical data before using it in live trading.
      </p>
      <p className="card4-description">
        <strong>Disclaimer:</strong> This information is not financial advice. Always use proper risk management and consider setting stop-loss and take-profit orders for your trades.
      </p>

      <h3 className="card4-title-left">License</h3>
      <p className="card4-description">
        This source code is subject to the terms of the Mozilla Public License 2.0 at <a href="https://mozilla.org/MPL/2.0/" target="_blank" rel="noopener noreferrer">https://mozilla.org/MPL/2.0/</a>
      </p>

      <h3 className="card4-title-left">Feedback and Contributions</h3>
      <p className="card4-description">
        If you have feedback or improvements to suggest, please create issues or pull requests on the GitHub repository linked below.
      </p>

      <a href="https://github.com/Vibertexs/Tradingview-Scripts" target="_blank" rel="noopener noreferrer">
        <button className="learn-more-button">GitHub Repository</button>
      </a>
    </div>
  );
};

export default Card4;
