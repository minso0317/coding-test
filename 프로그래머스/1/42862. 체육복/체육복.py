def solution(n, lost, reserve):
    # 1. 자기 여벌로 입은 학생 제거
    real_lost = [r_l for r_l in lost if r_l not in reserve]
    real_reserve = [r_r for r_r in reserve if r_r not in lost]

    # 2. 체육복을 빌릴 수 있는지 lost 순서대로 체크
    for r_l in sorted(real_lost):
        if r_l - 1 in real_reserve:
            real_reserve.remove(r_l - 1)
        elif r_l + 1 in real_reserve:
            real_reserve.remove(r_l + 1)
        else:
            continue  # 못 빌리면 그대로 둠
        real_lost.remove(r_l)  # 빌렸으면 lost에서 제거

    # 3. 체육 가능한 인원 수 반환
    return n - len(real_lost)
