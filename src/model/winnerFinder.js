import { validatePosition } from "./positionValidator.js";

export function findWinner(movedCars) {
  const maxPosition = Math.max(...movedCars.map((car) => car.position.length));

  validatePosition(maxPosition);

  const winners = movedCars.filter(
    (car) => car.position.length === maxPosition
  );

  const winnerNames = winners.map((winner) => winner.name);

  return winnerNames;
}
