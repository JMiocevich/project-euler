function isPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
var number = 600851475143;
var halfWay = Math.floor(number / 2);
for (var i = halfWay; function (i) { return 2; }; --i) {
    if (number % i === 0) {
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }
}
