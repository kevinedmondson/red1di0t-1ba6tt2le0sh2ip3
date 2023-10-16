import battleShipsData from "src/constants/battleShipData.json";
import { ShipTypes } from "src/types/shipTypes";

export default function getBattleShipsData() {
  const shipTypes = battleShipsData.shipTypes;
  const layout = battleShipsData.layout;

  const shipData = Object.entries(shipTypes).reduce((acc, [key, value]) => {
    return { ...acc, [key]: { ...value, numberOfSelected: 0 } };
  }, {} as ShipTypes);

  return { shipData, shipPositions: layout };
}
