import {
  validateCarNameDuplicate,
  validateCarNameLength,
} from '../model/carNameValidator.js';
import { createCars, parseCarNames } from '../model/createCars.js';

export function handleCarCreation(carNamesInput) {
  const names = parseCarNames(carNamesInput);
  validateCarNameLength(names);
  validateCarNameDuplicate(names);
  return createCars(names);
}
