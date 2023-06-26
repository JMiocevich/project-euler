let fibArray = [1, 2];
let index = 0;
let num = 0;
while (num < 4000000) {
  num = fibArray[index] + fibArray[index + 1];
  fibArray.push(num);
  index += 1;
}

let total_sum = 0;
fibArray.forEach((e) => (e % 2 == 0 ? (total_sum += e) : total_sum));

console.log(total_sum);
