def gridSearch(G,P,R,C,r,c):
    testi=0
    testj=0
    for i in range(R-r+1):
        for j in range(C-c+1):
            if G[i][j] == P[0][0]:
                testi=i
                testj=j
                count=0
                flag=0
                for x in range(r):
                    for y in range(c):
                        if G[testi][testj] == P[x][y]:
                            #print(testi,testj,"-->",G[testi][testj])
                            count+=1
                        else:
                            flag=1
                            break
                        testj=testj+1
                    if flag == 1:
                        break
                    else:
                        testi=testi+1
                        testj=j

                if count == (r*c):
                    return "YES"
                

    return "NO"
