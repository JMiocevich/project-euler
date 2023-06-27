
def isPrime(x):
    if x <= 1:
        return False
    
    # process all potential divisons
    for i in range(2,x):
        if x % i ==0:
            return False
    return True

number =600851475143

for i in range(number//2,2,-1):
    print(i)
    if number %i ==0:
        if isPrime(i):
            print("Largest Prime Factor = ", i)
            break
