def decimalValue(head):
    MOD=10**9+7
    # Code here
    n=0
    while(head.next):
        n=(n * 10) + head.data
        head=head.next
    n=(n * 10) + head.data
    return(int(str(n),2) % MOD)
