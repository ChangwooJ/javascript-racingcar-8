import { moveCar } from "../model/moveCar.js";

export function handleMoveController(cars) {
  return cars.map(moveCar);
}