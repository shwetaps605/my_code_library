def icecreamParlor(m, arr):
    d = {}
    for i, e in enumerate(arr):

        if (m - e) in d:
            ans = [i+1,d.get(m - e)+1]
            ans.sort()
            return ans
        d[e] = i
