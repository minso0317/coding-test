def solution(array):
    array.sort()
    length = len(array)
    
    if length % 2 == 1:  # 홀수 
        return array[length // 2]
    else:  # 짝수
        mid1 = array[length // 2 - 1]
        mid2 = array[length // 2]
        return (mid1 + mid2) / 2