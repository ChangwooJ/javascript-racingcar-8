export function validatePosition(maxPosition) {
  if (maxPosition === 0) {
    throw new Error(
      '"[ERROR] 우승자를 결정할 수 없습니다. 최소 이동 횟수가 1 이상이어야 합니다."'
    );
  }
}
