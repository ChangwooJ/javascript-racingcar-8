import { handleCarCreation } from './controller/carController.js';
import { handleMoveController } from './controller/moveController.js';
import { getCarNamesInput, getRoundInput } from './view/console.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const roundInput = await getRoundInput();

    const cars = handleCarCreation(carNamesInput);
    const movedCars = handleMoveController(cars, roundInput);
  }
}

export default App;
