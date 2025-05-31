function solution(brown, yellow) {
	const total = brown + yellow;
	
	let height = 3;
	
	while (height <= total) { // 세로가 합보다 크면 가로가 소수점이 되서 불가
		const width = total / height;
	
		if (Number.isInteger(width) && width>= height) {
			if ((width - 2) * (height - 2 ) === yellow) {
				return [width, height];
			}
		}
		height++
	}
}