import { produce, Draft } from "immer";
import { BattleShipActionTypes, BattleShipActions } from "./action";
import { GameStatus, ShipTypes } from "src/types/shipTypes";

export interface DBBattleShipState {
  shipData: ShipTypes;
  shipPositions: { ship: string; positions: number[][] }[];
  totalSelected: number;
  gameStatus: GameStatus;
}

const initialState: DBBattleShipState = {
  shipData: {},
  shipPositions: [],
  totalSelected: 0,
  gameStatus: "Ended",
};

const bottleShip = (state = initialState, action: BattleShipActions) => {
  return produce(state, (draft: Draft<DBBattleShipState>) => {
    switch (action.type) {
      case BattleShipActionTypes.SET_GAME_STATUS:
        draft.gameStatus = action.payload;
        break;
      case BattleShipActionTypes.INIT:
        draft.shipData = action.payload.shipData;
        draft.shipPositions = action.payload.shipPositions;
        draft.gameStatus = "Ready";
        draft.totalSelected = 0;
        break;
      case BattleShipActionTypes.SHIP_HITTED:
        const shipName = action.payload;
        if (draft.shipData.hasOwnProperty(shipName)) {
          draft.shipData[shipName].numberOfSelected += 1;
          draft.totalSelected += 1;
        }
        break;
      default:
        break;
    }
  });
};

export default bottleShip;
