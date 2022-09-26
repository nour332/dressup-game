// import "./assets/scss/style.scss";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { Dashboard } from "./Pages/Dashboard";
import { Game } from "./Pages/Game";
import { OtherGames } from "./Pages/OtherGames";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/game" element={<Game />} />
        <Route path="/other-games" element={<OtherGames />} />
      </Routes>
    </>
  );
}

export default App;
