package main

import (
	"fmt"
	"math"
)

func main() {

	fmt.Println(maxPrime(600851475143))

}

func maxPrime(n int) int {

	minPrime := -1

	for n%2 == 0 {
		minPrime = 2
		n = n / 2
	}

	maxPrime := math.Sqrt(float64(n))

	for i := 3; i <= int(maxPrime)+1; i += 2 {

		for n%i == 0 {

			minPrime = i
			n = n / i

		}
	}

	if n > 2 {
		minPrime = n
	}

	return minPrime
}
