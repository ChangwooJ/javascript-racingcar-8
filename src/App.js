import { handleCarCreation } from './controller/carController.js';
import { getCarNamesInput, getRoundInput } from './view/console.js';

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const roundInput = await getRoundInput();

    const cars = handleCarCreation(carNamesInput);
    console.log(cars);
  }
}

export default App;
