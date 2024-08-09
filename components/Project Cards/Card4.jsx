import React from 'react';
import './Card4.css';

const Card4 = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <h2>Scalping Bot 2.0</h2>
            </div>
            <div className="card-content">
                <section>
                    <h3>Overview</h3>
                    <p>
                        Scalping Bot 2.0 is an advanced trading strategy script designed for high-frequency trading on 
                        various financial markets. The bot combines multiple technical indicators to make informed trading 
                        decisions, focusing on short-term market movements. The strategy aims to capitalize on quick price 
                        changes, making it suitable for scalping.
                    </p>
                </section>

                <section>
                    <h3>Core Strategy</h3>
                    <p>
                        The core strategy of the bot is built around the following indicators:
                    </p>
                    <ul>
                        <li>
                            <strong>Laguerre Filter:</strong> Used for long-term market direction. The filter operates on a 
                            higher timeframe, allowing the bot to identify the prevailing market trend.
                        </li>
                        <li>
                            <strong>Smart Trend:</strong> An intermediate trend indicator that works on multiple levels of 
                            the market, providing a refined market bias. It uses ATR (Average True Range) and Supertrend 
                            calculations to determine the trend direction.
                        </li>
                        <li>
                            <strong>Stochastic RSI:</strong> This indicator is employed for immediate market bias, helping 
                            to determine precise entry points based on overbought or oversold conditions.
                        </li>
                    </ul>
                </section>

                <section>
                    <h3>Laguerre Filter</h3>
                    <p>
                        The Laguerre Filter is a key component that provides long-term trend analysis. It is designed to 
                        work on a user-defined higher timeframe, making it flexible to adapt to different market 
                        conditions. The filter calculates a smooth moving average, which is then analyzed to determine the 
                        market direction.
                    </p>
                    <p>
                        The bot tracks whether the Laguerre Filter is within the range of the current candle to identify 
                        ranging markets. If the market is ranging, the filter color turns gray, indicating indecision. 
                        Otherwise, it uses green for bullish trends and red for bearish trends.
                    </p>
                </section>

                <section>
                    <h3>Smart Trend</h3>
                    <p>
                        The Smart Trend component uses three levels of Supertrend indicators with varying ATR and factor 
                        values to determine the intermediate trend direction. By analyzing the alignment of these trends, 
                        the bot can identify strong market conditions and provide clear trading signals.
                    </p>
                    <p>
                        If all three Supertrends align, the trend is considered strong and the bot proceeds with 
                        trend-based trading strategies. The trend is visually represented by green (uptrend), red 
                        (downtrend), or gray (neutral) colors.
                    </p>
                </section>

                <section>
                    <h3>Stochastic RSI</h3>
                    <p>
                        The Stochastic RSI is used for immediate market bias, focusing on identifying overbought and 
                        oversold conditions. The indicator calculates the RSI and then applies a stochastic calculation to 
                        it, resulting in a value that oscillates between 0 and 100.
                    </p>
                    <p>
                        The bot uses this value to determine if a potential entry point is valid, based on whether the 
                        Stochastic RSI crosses certain thresholds. A green label indicates a buying opportunity, while a 
                        red label indicates a selling opportunity.
                    </p>
                </section>

                <section>
                    <h3>Trade Conditions and Entries</h3>
                    <p>
                        The bot implements strict entry conditions to ensure high-probability trades. It waits for the 
                        alignment of the Laguerre Filter and Smart Trend, and then looks for a confirmation from the 
                        Stochastic RSI. A candle in the direction of the trade must also confirm the entry.
                    </p>
                    <p>
                        The bot includes a cool-down period after each trade to prevent overtrading and to ensure that the 
                        market conditions remain favorable before re-entering a trade.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Card4;
