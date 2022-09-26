import React from "react";
import { GameCard } from "../GameCard";

const games = [
  {
    name: "Fifa 2022",
    category: "Sports",
    stars: 5,
    image: "fifa.png",
    color: "#9947C5",
    link: '/game'
  },
  {
    name: "Tomb Raider",
    category: "Action",
    stars: 4,
    image: "Tomb-Raider.png",
    color: "#6E9E8B",
    link: '/game'
  },
  {
    name: "Assassin's Creed",
    category: "Action, Combat",
    stars: 4,
    image: "assassins-creed.png",
    color: "#A8B8C0",
    link: '/game'
  },
];

export const GamesList = () => {
  return (
    <div className="games-list">
      <h2 className="title">Games list</h2>
      <ul>
        {games.map((game) => (<GameCard game={game} />))}
      </ul>
    </div>
  );
};
