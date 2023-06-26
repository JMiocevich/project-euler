package main

import "fmt"

func main() {
	totalSum := 0
	for i := 0; i < 1000; i++ {
		if i%3 == 0 || i%5 == 0 {
			totalSum += i
		}
	}
	fmt.Println(totalSum)
}
