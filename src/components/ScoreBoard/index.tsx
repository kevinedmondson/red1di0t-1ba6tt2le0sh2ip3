import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { DBBattleShipState } from "src/redux/reducer";

const ScoreBoard = () => {
  const totalSelected = useSelector(
    (state: DBBattleShipState) => state.totalSelected
  );

  return (
    <div className="score_board">
      <div
        className="player"
        style={{
          backgroundColor: "#fba743",
        }}
      >
        <p className="score">{String(totalSelected).padStart(2, '0')}</p>
        <div className="devision"></div>
        <p className="player_name">Player1</p>
      </div>
      <div
        className="player"
        style={{
          backgroundColor: "#2dad9a",
        }}
      >
        <p className="score">00</p>
        <div className="devision"></div>
        <p className="player_name">Player2</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
