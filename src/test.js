function isContainNumber(num, digit) {
  let number = num;
  while (number > 0) {
    console.log(number);
    const current = number % 10;
    if (current === digit) {
      return true;
    }
    number = Math.floor(number / 10);
    console.log(number / 10);
  }

  return false;
}

console.log(isContainNumber(12345, 0));
