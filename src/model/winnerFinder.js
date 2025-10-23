export function findWinner(movedCars) {
  const maxPosition = Math.max(...movedCars.map((car) => car.position.length));

  const winners = movedCars.filter((car) => car.position === maxPosition);

  const winnerNames = winners.map((winner) => winner.name);

  return winnerNames;
}
