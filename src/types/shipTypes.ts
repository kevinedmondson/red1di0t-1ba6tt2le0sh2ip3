export type GameStatus = "Ready" | "Started" | "Ended";

export type ShipType = {
  size: number;
  count: number;
  numberOfSelected: number;
};

export type ShipTypes = Record<string, ShipType>;
