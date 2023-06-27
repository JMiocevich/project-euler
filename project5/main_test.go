package main

import "testing"

func TestIsPalindrone(t *testing.T) {
	value := 10001
	want := true
	msg := isPalindrone(value)
	if want != msg {
		t.Fatalf(`bag things have happened`)
	}
}

func TestIsPalindrone2(t *testing.T) {
	value := 1002
	want := false
	msg := isPalindrone(value)
	if want != msg {
		t.Fatalf(`bag things have happened`)
	}
}
