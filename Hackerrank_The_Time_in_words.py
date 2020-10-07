#!/bin/python3

import math
import os
import random
import re
import sys

def getHourString(h,o,t):
    hcount = len(str(h))
    if hcount == 1:
        hstr = o[h]
    else:
        hstr = t[h]

    return hstr
        


# Complete the timeInWords function below.
def timeInWords(h,m,o,t):

    mlist=[]

    if m == 0:
        hstr = getHourString(h,o,t)
        ans = hstr+" o' clock"
        
    elif m == 15:
        hstr = getHourString(h,o,t)
        ans = "quarter past" + " "+ hstr

    elif m == 30:
        hstr =getHourString(h,o,t)
        ans = "half past" + " "+ hstr

    elif m == 45:
        hstr = getHourString(h+1,o,t)
        ans = "quarter to" + " "+ hstr

    else:
        if m > 0 and m < 30:
            n = list(str(m))
            mid = "past"
            hstr = getHourString(h,o,t)
        else:
            n = list(str(60-m))
            mid = "to"
            hstr = getHourString(h+1,o,t)
            
        if len(n) == 1:
            m = int(n[0])
            if m == 1:
                ans = o[m] + " minute " + mid + " " + hstr
            else:
                ans = o[m] + " minutes " + mid + " " + hstr
        else:
            if (60-m) >= 10 and (60-m) <= 19:
                mlist.append(t[60-m])
                ans = "".join(map(str,mlist)) + " minutes " + mid + " " + hstr
            else: 
                mlist.append(t[int(n[0])*10])
                mlist.append(o[int(n[1])])
                ans = " ".join(map(str,mlist)) + " minutes " + mid + " " + hstr

    return ans


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input())

    m = int(input())

    one_digit={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",
    8:"eight",9:"nine"}
    two_digits={10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty"}

    result = timeInWords(h, m, one_digit, two_digits)

    fptr.write(result + '\n')

    fptr.close()
