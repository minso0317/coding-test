def solution(num_list):
    answer = []
    n = len(num_list)
    
    for i in num_list[n::-1]:
        answer.append(i)
    
    return answer