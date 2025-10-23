import { handleCarCreation } from './controller/carController.js';
import { handleMoveController } from './controller/moveController.js';
import { findWinner } from './model/winnerFinder.js';
import {
  getCarNamesInput,
  getRoundInput,
  printLineBreak,
  printMessage,
  printWinner,
} from './view/console.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const roundInput = await getRoundInput();

    printLineBreak();

    const cars = handleCarCreation(carNamesInput);

    printMessage('실행 결과');

    const movedCars = handleMoveController(cars, roundInput);
    const winnerNames = findWinner(movedCars);

    printWinner(winnerNames);
  }
}

export default App;
