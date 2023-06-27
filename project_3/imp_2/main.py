import math
  
# A function to find largest prime factor
def maxPrimeFactors (n):
      
    # Initialize the maximum prime factor
    # variable with the lowest one
    maxPrime = -1
      
    # Print the number of 2s that divide n
    while n % 2 == 0:
        maxPrime = 2
        n /=2    # equivalent to n /= 2

          
    # n must be odd at this point, 
    # thus skip the even numbers and 
    # iterate only for odd integers
    number= n
    array = range(3, int(math.sqrt(n)))
    for i in range(3, int(math.sqrt(n)) + 1, 2):

        while number % i == 0:
            print(i, number , number/i)
            maxPrime = i
            number = number / i

      
    # This condition is to handle the 
    # case when n is a prime number 
    # greater than 2
    if number > 2:
        maxPrime = number
      
    return int(maxPrime)
  
# Driver code to test above function
n = 600851475143
print(maxPrimeFactors(n))
