package main

import "fmt"

func main() {

	fibArray := FibonacciRecursion(4000000)
	totalSum := 0
	for _, v := range fibArray {
		if v%2 == 0 {
			totalSum += v
		}
	}
	fmt.Print(totalSum)
}

func FibonacciRecursion(n int) []int {
	var fibArray []int
	fibArray = append(fibArray, 1, 2)
	num := 0

	for i := 0; num < n; i++ {

		num = fibArray[i] + fibArray[i+1]
		fibArray = append(fibArray, num)
	}
	return fibArray
}
