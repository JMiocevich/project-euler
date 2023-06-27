

def isPalindrone(x):
    value = str(x)
    reversedValue = value[::-1]
    if value == reversedValue:
        print("true")
        return True
    else: 
        return False

array = []

for i in range(100,999):
    for j in range(100,999):
        value = i*j

        if isPalindrone(value):
            array.append(int(value))


print(max(array))

            


