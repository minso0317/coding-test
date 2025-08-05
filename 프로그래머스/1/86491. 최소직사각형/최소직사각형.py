def solution(sizes):
		answer = [0, 0]
		
		for size in sizes:
				w, h = size
				
				# 가로가 더 길도록 정렬
				if w < h:  
						w, h = h, w
				
				# answer 배열 갱신		
				if w > answer[0]: 
						answer[0] = w
				if h > answer[1]:
						answer[1] = h
				
		return answer[0] * answer[1]