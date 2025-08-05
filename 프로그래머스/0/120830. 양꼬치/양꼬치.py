def solution(n, k):
    answer = 0
    lamb = 12000
    drink = 2000
    
    answer = lamb*n + drink*(k - (n // 10))
    
    return answer