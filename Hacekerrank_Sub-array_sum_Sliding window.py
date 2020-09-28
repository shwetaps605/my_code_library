#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the birthday function below.
def birthday(s, d, m):
    #print(s)
    n=len(s)
    count=0

    if m == 1:
        if d in s:
            count= 1
            return count
        else:
            return count

    windowSum= sum(s[:m])


    for i in range(n-m):
        if windowSum == d:
            count+=1
        
        #print(i,windowSum)
        windowSum = windowSum - s[i] + s[i+m]

    return count
        


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    s = list(map(int, input().rstrip().split()))

    dm = input().rstrip().split()

    d = int(dm[0])

    m = int(dm[1])

    result1 = birthday(s, d, m)
    s.reverse()
    result2 = birthday(s, d, m)

    result = max(result1,result2)

    fptr.write(str(result) + '\n')

    fptr.close()
