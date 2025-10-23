import { MissionUtils } from "@woowacourse/mission-utils";

const MIN_NUMBER = 0;
const MAX_NUMBER = 9;

export function generateRandomNumber() {
  return MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
}