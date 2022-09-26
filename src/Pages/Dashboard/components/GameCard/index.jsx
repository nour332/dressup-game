import React from "react";
import { Link } from "react-router-dom";

export const GameCard = ({ game }) => {
  return (
    <li
      className="game-card"
      style={{
        backgroundColor: game.color,
      }}
    >
      <Link className="link" to={game.link}>
        <img className="cover" src={`/images/Games/covers/${game.image}`} />
        <span className="stars">{game.stars} stars</span>
        <div className="game-content">
          <img src={`/images/Games/icons/${game.image}`} />
          <div className="game-name">{game.name}</div>
        </div>
      </Link>
    </li>
  );
};
