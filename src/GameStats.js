import React from "react";
import PropTypes from 'prop-types';
import './GameStats.css'

const GameStats = ({winCount, lossCount}) => {
    return (
        <div className="stat-container">
            <h2>Game Stats</h2>
            <p>Wins: {winCount}</p>
            <p>Losses: {lossCount}</p>
        </div>
    )
}

export default GameStats;

GameStats.propTypes = {
    winCount: PropTypes.number.isRequired,
    lossCount: PropTypes.number.isRequired
}