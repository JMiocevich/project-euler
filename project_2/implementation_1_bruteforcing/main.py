

# Create fib Sequence
fibArray = [1,2]
index =0 
num =0
while num <4000000:
    num = fibArray[index] + fibArray[index + 1]
    fibArray.append(num)
    index += 1


total_sum = 0
for num in fibArray:
    if (num%2 == 0 ):
        total_sum = total_sum+num

print(total_sum)
