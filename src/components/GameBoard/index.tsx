import React, { useEffect } from "react";
import Cell from "../Cell";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { DBBattleShipState } from "src/redux/reducer";
import { gameAction, init } from "src/redux/action";

const GameBoard = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: DBBattleShipState) => state.gameStatus);
  const totalSelected = useSelector(
    (state: DBBattleShipState) => state.totalSelected
  );

  const renderCells = () => {
    const cells = [];
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        cells.push(<Cell key={`${row}-${col}`} row={row} col={col} />);
      }
    }
    return cells;
  };

  useEffect(() => {
    if (totalSelected === 17) {
      dispatch(gameAction("Ended"));
    }
  }, [totalSelected]);

  return (
    <div
      className={`game_board ${
        status === "Started" ? "game_started" : "game_not-started"
      }`}
    >
      {status === "Started" ? (
        renderCells()
      ) : status === "Ready" ? (
        <div
          className="start_game"
          onClick={() => dispatch(gameAction("Started"))}
        >
          Start!
        </div>
      ) : (
        <div className="end_game">
          <p>Found All Ships!</p>
          <p className="new_game" onClick={() => dispatch(init())}>
            Start New Game
          </p>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
