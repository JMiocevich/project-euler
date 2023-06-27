function maxPrime(n: number): number {
  let maxPrime = -1;

  while (n % 2 == 0) {
    maxPrime = 2;
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i == 0) {
      maxPrime = i;
      n = n / i;
    }
  }

  maxPrime = n > 2 ? n : maxPrime;

  return maxPrime;
}

console.log(maxPrime(600851475143));
