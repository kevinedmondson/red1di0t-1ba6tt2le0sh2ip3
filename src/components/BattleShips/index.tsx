import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DBBattleShipState } from "src/redux/reducer";
import BattleShip from "src/assets/Battleship Shape.png";
import Carrier from "src/assets/Carrier Shape.png";
import Cruiser from "src/assets/Cruiser Shape.png";
import Destroyer from "src/assets/Destroyer Shape.png";
import Submarine from "src/assets/Submarine Shape.png";
import MissSmall from "src/assets/Miss small.png";
import HitSmall from "src/assets/Hit small.png";
import "./style.scss";

type ShipDataType = {
  shipType: string;
  size: number;
  fitted: number;
};

const BattleShips = () => {
  const battleShipsData = useSelector(
    (state: DBBattleShipState) => state.shipData
  );
  const [shipData, setShipData] = useState<ShipDataType[]>([]);

  useEffect(() => {
    let data = Object.entries(battleShipsData)?.map(([key, value]) => {
      let shipType = "";
      switch (key) {
        case "carrier":
          shipType = Carrier;
          break;
        case "battleship":
          shipType = BattleShip;
          break;
        case "cruiser":
          shipType = Cruiser;
          break;
        case "submarine":
          shipType = Submarine;
          break;
        case "destroyer":
          shipType = Destroyer;
          break;
        default:
          break;
      }
      return {
        shipType: shipType,
        size: value.size,
        fitted: value.numberOfSelected,
      };
    });
    setShipData(data);
  }, [battleShipsData]);

  const renderMiss = (size: number, fitted: number) => {
    let MissComponents = [];
    for (let i = 0; i < fitted; i++) {
      MissComponents.push(<img src={HitSmall} key={i} />);
    }
    for (let i = 0; i < size - fitted; i++) {
      MissComponents.push(<img src={MissSmall} key={fitted + i} />);
    }
    return MissComponents;
  };

  return (
    <div className="ships_container">
      {shipData.map((ship, index) => (
        <div className="battle_ships" key={index}>
          <img src={ship.shipType} />
          {renderMiss(ship.size, ship.fitted)}
        </div>
      ))}
    </div>
  );
};

export default BattleShips;
