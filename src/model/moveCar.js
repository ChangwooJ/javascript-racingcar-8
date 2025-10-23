import { decideMove } from "./moveDicision.js";
import { generateRandomNumber } from "./randomNumber.js";

export function moveCar(car) {
  const randomValue = generateRandomNumber();

  if (decideMove(randomValue)) {
    return { ...car, position: car.position + 1 };
  }
  
  return car;
}