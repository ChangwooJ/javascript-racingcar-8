import { getCarNamesInput, getRoundInput } from "./view/console";

class App {
  async run() {
    const carNamesInput = await getCarNamesInput();
    const roundInput = await getRoundInput();
  }
}

export default App;
