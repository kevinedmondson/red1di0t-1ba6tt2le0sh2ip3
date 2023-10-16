import React, { useState, memo } from "react";
import Hit from "src/assets/Hit.png";
import Miss from "src/assets/Miss.png";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { DBBattleShipState } from "src/redux/reducer";
import { shipHitted } from "src/redux/action";

interface CellProps {
  row: number;
  col: number;
}

enum CellStatus {
  UNVISITED = "unvisited",
  HIT = "hit",
  MISS = "miss",
}

const Cell = ({ row, col }: CellProps) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState<CellStatus>(CellStatus.UNVISITED);
  const battleShipPositions = useSelector(
    (state: DBBattleShipState) => state.shipPositions
  );

  const handleClick = () => {
    let hitted = false;
    let battleShipType:string = '';
    if(status === CellStatus.UNVISITED) {
      battleShipPositions.map(({ ship, positions }) => {
        positions.map((position) => {
          if (position[0] === row && position[1] === col) {
            hitted = true;
            battleShipType = ship;
          }
        });
      });
      setStatus(hitted ? CellStatus.HIT : CellStatus.MISS);
      dispatch(shipHitted(battleShipType));
    }
  };

  return (
    <div className="cell" onClick={handleClick}>
      {status === CellStatus.HIT ? (
        <img src={Hit} width="100%" />
      ) : (
        status === CellStatus.MISS && <img src={Miss} width="100%" />
      )}
    </div>
  );
};

export default memo(Cell);
