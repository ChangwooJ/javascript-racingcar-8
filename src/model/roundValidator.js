export function validateRounds(roundsInput) {
  const rounds = Number(roundsInput.trim());

  if (isNaN(rounds)) {
    throw new Error('[ERROR] 시도할 횟수로는 숫자만 입력 가능합니다.');
  }

  if (rounds <= 0) {
    throw new Error('[ERROR] 시도할 횟수로는 양수를 입력해주세요.');
  }

  return rounds;
}
