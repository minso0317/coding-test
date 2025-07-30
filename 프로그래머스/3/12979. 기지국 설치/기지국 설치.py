import math

def solution(n, stations, w):
    coverage = 2 * w + 1  # 기지국이 한 번에 커버할 수 있는 범위
    answer = 0
    current = 1  # 현재 커버되지 않은 시작 지점

    stations.sort()  # 혹시 모를 정렬 (안되어 있을 경우 대비)

    for station in stations:
        left = station - w  # 현재 기지국이 커버하는 시작 위치
        right = station + w  # 현재 기지국이 커버하는 끝 위치

        # 현재 위치가 기지국 커버 범위 바깥이면, 그 사이를 커버해야 함
        if current < left:
            gap = left - current  # 커버되지 않은 구간 길이
            needed = math.ceil(gap / coverage)  # 필요한 기지국 수
            answer += needed

        # 다음 커버되지 않은 지점 갱신
        current = right + 1

    # 마지막 기지국 이후에도 남은 구간이 있다면 추가로 커버
    if current <= n:
        gap = n - current + 1
        needed = math.ceil(gap / coverage)
        answer += needed

    return answer
    
    
# 테스트 코드
print(solution(11, [4, 11], 1))  # 출력: 3
# 1~2, 5~10 커버가 안되어서 각각 1개, 1개 추가 필요 → 총 3개