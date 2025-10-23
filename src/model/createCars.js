export function parseCarNames(carNamesInput) {
  return carNamesInput.split(',').map((name) => name.trim());
}

export function createCars(names) {
  const cars = names.map((name) => ({
    name: name,
    position: '',
  }));

  return cars;
}
