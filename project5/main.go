package main

import "fmt"

func main() {

	max := 0
	var value int
	for i := 100; i <= 999; i++ {
		for j := 100; j <= 999; j++ {
			value = i * j
			if value > max && isPalindrone(value) {
				max = value

			}
		}
	}
	fmt.Println(max)

}

func isPalindrone(n int) bool {

	var remainder int
	var reverse int = 0
	var rn int = n
	for n > 0 {
		remainder = n % 10
		reverse = reverse*10 + remainder
		n /= 10
	}

	if reverse == rn {
		return true

	} else {
		return false
	}
}
