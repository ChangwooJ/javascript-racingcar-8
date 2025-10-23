import { moveCar } from '../model/moveCar.js';
import { validateRounds } from '../model/roundValidator.js';
import { printCarPosition, printLineBreak } from '../view/console.js';

export function handleMoveController(cars, roundsInput) {
  const rounds = validateRounds(roundsInput);

  let updatedCars = [...cars];

  for (let i = 0; i < rounds; i++) {
    updatedCars = updatedCars.map(moveCar);
    for (let j = 0; j < updatedCars.length; j++) {
      printCarPosition(updatedCars[j]);
    }
    printLineBreak();
  }

  return updatedCars;
}
