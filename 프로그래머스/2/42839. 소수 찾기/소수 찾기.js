function solution(numbers) {
	const number = numbers.split(""); // '숫자 문자열'들을 배열로 변환
	const setNumbers = new Set(); // 중복 제거 후 저장
	
	for (let i = 1; i <= number.length; i++) {
		getNumbers(number, i).forEach((numToString) => {
			const num = parseInt(numToString, 10); // 문자열을 숫자로 변환
			if(!isNaN(num)) {
				setNumbers.add(num)		
			}
		});
	}
	
	const arrayNumbers = Array.from(setNumbers); // Set → 배열로 변환
	const result = arrayNumbers.filter(isPrime);    // 소수만 추출
	return result.length;                   // 개수 반환
}

function getNumbers(numberArr, select) {
	if (select === 1) { // 1개 만 고르는 기본 케이스(기저 조건)
		return numberArr.map((value) => [value].join("")) // 배열을 문자열로 변환, 아래 재귀함수에서 나올 복합 문자열 조합들과 같은 형식으로 맞추기 위해.
	}
	
	const result = [];
	
	numberArr.forEach((fixed, index) => { // 배열에서 하나씩 선택해서 fixed 변수에 저장, 나머지 요소들로 다음 순열을 만들기 위해 rest를 만든다.
		const rest = [...numberArr.slice(0, index), ...numberArr.slice(index + 1)];
		const numbers = getNumbers(rest, select - 1); // 재귀호출, rest에서 나머지 자리 수 만큼 숫자 조합을 다시 구한다.
		numbers.forEach((number) => result.push(fixed + number)); 
	});
	return result;
}

function isPrime(n) { // 소수판단 (단일검사)
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}