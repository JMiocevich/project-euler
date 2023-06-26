var fibArray = [1, 2];
var index = 0;
var num = 0;
while (num < 4000000) {
    num = fibArray[index] + fibArray[index + 1];
    fibArray.push(num);
    index += 1;
}
var total_sum = 0;
fibArray.forEach(function (e) { return (e % 2 == 0 ? (total_sum += e) : total_sum); });
console.log(total_sum);
