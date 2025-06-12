function solution(progresses, speeds) {
	const answer = [];
	const days = progresses.map((progress, i) =>
		Math.ceil((100 - progress) / speeds[i])); 
		// map은 progress만 인덱스 순으로 매핑하므로 speeds는 인덱스 순으로 불러오도록 붙혀준다.
		
		let dDay = days[0];
		let count = 1;
		
		for(let i = 1; i < days.length; i++) {
			if (days[i] <= dDay) {
				count += 1;
			} else {
				answer.push(count);
				dDay = days[i] // 배포 후 ,새로운 배포 기준일 설정
				count = 1;
			}
		}
		
		answer.push(count) // 마지막 그룹 배포일 추가
		return answer;
	}