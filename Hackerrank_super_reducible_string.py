#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the superReducedString function below.
def superReducedString(s):
    stack=[]

    for c in s:
        if(len(stack)==0):
            stack.append(c)
        else:
            x=stack[-1]
            if c == x:
                dup = stack.pop()
                continue
            else:
                stack.append(c)

    #print(stack)

    if len(stack) == 0:
        return "Empty String"
    else:
        return ("".join(map(str,stack)))


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = superReducedString(s)

    fptr.write(result + '\n')

    fptr.close()
