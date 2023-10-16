import { GameStatus } from "src/types/shipTypes";
import { DBBattleShipState } from "./reducer";
import getBattleShipsData from "src/helpers/getBattleShipData";

export enum BattleShipActionTypes {
  INIT = `@battle-ship/INIT`,
  SHIP_HITTED = `@battle-ship/SHIP_HITTED`,
  SET_GAME_STATUS = `@battle-ship/SET_GAME_STATUS`,
}

export type BattleShipActions =
  | { type: BattleShipActionTypes.INIT; payload: DBBattleShipState }
  | { type: BattleShipActionTypes.SHIP_HITTED; payload: string }
  | { type: BattleShipActionTypes.SET_GAME_STATUS; payload: GameStatus };

export const gameAction = (status: GameStatus) => {
  return {
    type: BattleShipActionTypes.SET_GAME_STATUS,
    payload: status,
  };
};

export const init = () => {
  const { shipData, shipPositions } = getBattleShipsData();
  return {
    type: BattleShipActionTypes.INIT,
    payload: { shipData, shipPositions },
  };
};

export const shipHitted = (shiptype: string) => {
  return {
    type: BattleShipActionTypes.SHIP_HITTED,
    payload: shiptype,
  };
};
