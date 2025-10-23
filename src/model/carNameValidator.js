export function validateCarNameLength(names) {
  names.forEach((name) => {
    const trimmedName = name.trim();

    if (trimmedName.length === 0 || trimmedName.length > 5) {
      throw new Error(
        '[ERROR] 자동차 이름은 1자 이상 5자 이하로 구성되어야 합니다.'
      );
    }
  });
}
