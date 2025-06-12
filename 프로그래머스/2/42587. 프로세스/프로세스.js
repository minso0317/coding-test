function solution(priorities, location) {
const queue = priorities.map((priorities, i) => [priorities, i]);
let count = 0;

while(queue.length > 0) {
	const process = queue.shift();
	
	const findHigherProcess = queue.some(
		([queue]) => queue > process[0] // 0번 인덱스 = 우선순위
	);
	
	if(findHigherProcess) {
		queue.push(process);
	} else {
		count += 1;
		
		if(process[1] === location) { // 1번 인덱스 = 원래 프로세스 번호
			return count;
	 }
	}
 }
}