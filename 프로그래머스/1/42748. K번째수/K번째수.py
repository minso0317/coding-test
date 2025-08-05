def solution(array, commands):
    answer = []

    for command in commands:
        i, j, k = command
        
        new_array = array[i - 1:j]  # 슬라이싱
        new_array.sort()           # 정렬
        answer.append(new_array[k - 1])  # k번째 수 추가

    return answer