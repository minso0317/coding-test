function solution(arr, divisor) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
	  const element = arr[i];
	  
	  if ( element % divisor === 0) {
		  answer.push(element);
		}
	}
	
	if (answer.length === 0) {
	return [-1];
	}
	
	answer.sort((a, b) => a - b);
  return answer;
}