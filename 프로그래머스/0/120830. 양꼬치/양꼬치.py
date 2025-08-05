def solution(n, k):
    answer = 0
    lamb = 12000
    drink = 2000
    service_drink = n // 10
    
    answer = lamb*n + drink*(k - service_drink)
    
    return answer