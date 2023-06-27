function isPalindrone(n: number): boolean {
  const temp: number = n;
  let lastDigit: number;
  let newNumber: number = 0;

  while (n > 0) {
    lastDigit = n % 10;

    newNumber = newNumber * 10 + lastDigit;
    // console.log(newNumber);
    n = Math.floor(n / 10);
  }

  if (newNumber === temp) {
    return true;
  } else {
    return false;
  }
}

let max = 0;
let value: number;
for (let i = 100; i <= 999; i++) {
  for (let j = 100; j <= 999; j++) {
    value = i * j;

    max = isPalindrone(value) && value > max ? value : max;
  }
}

console.log(max);

// isPalindrone(123321);
