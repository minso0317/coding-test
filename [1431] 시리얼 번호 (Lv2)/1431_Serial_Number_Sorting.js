/**
 * 문제 요약
 *
 * 여러 개의 시리얼 번호(문자열)를 다음 3가지 기준에 따라 정렬
 *
 * 정렬 기준
 *  - 길이가 짧을수록 앞에 온다.
 *  - 길이가 같다면, 숫자의 합이 더 작은 시리얼이 앞에 온다.
 *  - 위의 두 방법도 같으면 사전순으로 정렬한다.(숫자 < 알파벳)
 */

/**
 * 문제 개념
 *
 * 정렬(sort) - Array.prototype.sort()에 비교함수를 준다.
 * 문자열 속 숫자 합 - 문자열을 순회하면서 숫자만 골라 더한다.
 * 복합 조건 정렬 - 조건이 여러 개일 경우 정렬 기준 우선 순위대로 if문 작성
 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const serials = input.slice[1]; // 시리얼 번호 목록

// 숫자만 더해주는 함수
function getNumberSum(str) {
  let sum = 0;
  for (let value of str) {
    if (!isNaN(value)) {
      // 숫자인지 체크
      sum += Number(value); // 문자열 숫자를 정수로 변환하여 합산
    }
  }
  return sum;
}

// 정렬 기준 함수
serials.sort((a, b) => {
  // 길이 비교
  if (a.length !== b.length) {
    return a.length - b.length; // 길이가 짧은 시리얼이 앞으로 정렬
  }

  // 숫자합 비교
  const sumA = getNumberSum(a);
  const sumB = getNumberSum(b);

  if (sumA !== sumB) {
    return sumA - sumB; // 숫자합 작은게 앞으로
  }

  // 사전순 비교
  return a.localeCompare(b); // 기본 문자열 정렬
});

console.log(serials.join("\n")); // 시리얼 출력

/**
 * 개념 정리
 *
 * sort((a, b) => ...)	a가 b보다 앞에 오려면 음수, 뒤에 오려면 양수 반환
 * localeCompare()	문자열을 사전순 비교할 때 사용 (유니코드 기준)
 * isNaN(char)	char이 숫자가 아니면 true, 숫자면 false
 */

/**
 * 중요 포인트
 *
 * 문자열 속 숫자만 더할 때, isNaN()활용
 * 정렬 기준이 여러 개일 땐 순서대로 조건문을 나눠서 비교
 * 정렬 로직 안에서 같으면 다음 기준으로 넘어가도록 구현
 */

/**
 * localeCompare()
 *
 * localeCompare는 자바스크립트에서 문자열을 사전순으로 비교할 때 사용하는 메서드다.
 *
 * 기본설명
 * string1.localeCompare(string2)
 *  - string1이 string2보다 앞에 오면 → -1
 *  - string1이 string2보다 뒤에 오면 → 1
 *  - 같으면 → 0
 */
