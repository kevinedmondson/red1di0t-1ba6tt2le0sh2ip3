import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";

import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import BattleShips from "./components/BattleShips";

import { init } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <GameBoard />
        <div className="show_status">
          <ScoreBoard />
          <BattleShips />
        </div>
      </div>
    </div>
  );
}

export default App;
