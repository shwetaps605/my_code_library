def findDigits(n):
    a=[]
    while(n!=0):
        rem=n%10
        a.append(rem)
        n = n // 10
    a.reverse()
    return a 

def kaprekarNumbers(p, q):
    arr=[]
    res=[]

    for i in range(p,q+1):
        k = i*i

        if k == 1:
            res.append(1)
            continue

        dlist = findDigits(k)
        digits = len(findDigits(i))
        if len(dlist) > 1:
            r=dlist[-digits:]
            l=dlist[:(len(dlist) - len(r))]
            lnum= int("".join(map(str,l)))
            rnum= int("".join(map(str,r)))
            if lnum + rnum == i:
                res.append(i)

    if len(res) == 0:
        print("INVALID RANGE")
    else:
        print(" ".join(map(str,res)))
