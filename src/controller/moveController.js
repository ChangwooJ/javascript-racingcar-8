import { moveCar } from '../model/moveCar.js';
import { validateRounds } from '../model/roundValidator.js';

export function handleMoveController(cars, roundsInput) {
  const rounds = validateRounds(roundsInput);

  let updatedCars = [...cars];

  for (let i = 0; i < rounds; i++) {
    updatedCars = updatedCars.map(moveCar);
  }

  return updatedCars;
}
