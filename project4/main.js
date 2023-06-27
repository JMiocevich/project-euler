function isPalindrone(n) {
    var temp = n;
    var lastDigit;
    var newNumber = 0;
    while (n > 0) {
        lastDigit = n % 10;
        newNumber = newNumber * 10 + lastDigit;
        // console.log(newNumber);
        n = Math.floor(n / 10);
    }
    if (newNumber === temp) {
        return true;
    }
    else {
        return false;
    }
}
var max = 0;
var value;
for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
        value = i * j;
        max = isPalindrone(value) && value > max ? value : max;
    }
}
console.log(max);
// isPalindrone(123321);
