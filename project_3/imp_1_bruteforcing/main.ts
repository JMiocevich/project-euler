function isPrime(x: number) {
  if (x <= 1) {
    return false;
  }

  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

const number = 13195;

const halfWay = Math.floor(number / 2);

for (let i: number = halfWay; (i: number) => 2; --i) {
  if (number % i === 0) {
    if (isPrime(i)) {
      console.log(i);
      break;
    }
  }
}
