function solution (number) {
	const result = [];
	
	for (let i = 0; i < number.length ; i++) {
		for (let j = i + 1; j < number.length ; j++) {
			const sum = number[i] + number[j];
			
			if (!result.includes(sum)) {
			result.push(sum);
			}
		}
	}
	return result.sort((a, b) => a - b);
}