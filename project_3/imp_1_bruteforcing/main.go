package main

import (
	"fmt"
	"math"

	"github.com/schollz/progressbar/v3"
)

func main() {

	const number float64 = 600851475143
	halfway := math.Floor(number / 2)
	bar := progressbar.Default(int64(halfway))

	for i := halfway; i >= 2; i-- {
		bar.Add(1)
		if int(number)%int(i) == 0 {
			if isPrime(int(i)) {
				fmt.Println(i)
				break
			}

		}

	}
}

func isPrime(n int) bool {

	if n <= 1 {
		return false
	}

	for i := 2; i < n; i++ {
		if n%i == 0 {
			return false
		}

	}
	return true
}
