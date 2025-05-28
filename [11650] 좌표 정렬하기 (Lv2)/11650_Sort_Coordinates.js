/**
 * 문제 요약
 *
 * 2차원 평면 위에 점들이 주어졌을 때,
 * x 좌표 기준으로 오름차순,
 * x가 같으면 y 좌표 기준으로 오름차순으로 정렬해서 출력
 */

/**
 * 문제 개념
 *
 * 배열 정렬: .sort() 함수로 정렬
 * 2차원 배열: [[x1, y1], [x2, y3], ...]
 * 비교 함수: sort((a,b) => ...)에서 직접 기준 지정
 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 첫 줄: 점의 개수 N (문자열 → 숫자로 변환)
const N = Number(input[0]);

// 두 번째 줄부터 좌표 데이터가 들어 있으므로 [1]부터 슬라이스
// map으로 문자열을 숫자 배열 [x, y]로 변환
const points = input.slice(1).map((line) => {
  // input.slice(1) 두 번째 줄부터 좌표만 추출
  // map()은 각 줄을 반복해서 처리
  // 배열의 각 요소에 함수를 적용해서 새 배열을 만들어 줌
  const [x, y] = line.split(" ").map(Number);
  // .split(' ') 문자열을 공백으로 잘라 배열로 만듬
  // "3 4" → ["3", "4"]
  // .map(Number)로 문자열 숫자를 숫자로 바꿈
  // [x, y] = ... 구조 분해 할당 (Destructuring Assignment) 사용
  // ex - [x, y] = [3, 4] → x = 3, y = 4
  return [x, y]; //  최종적으로 숫자 배열로 반환
});
// 정렬
// sort 함수 안에 비교함수를 직접 만들어서 정렬 기준으로 지정
points.sort((a, b) => {
  if (a[0] !== b[0]) {
    // a와 b의 x 좌푝 다르면 -> x 오름차순으로 정렬
    return a[0] - b[0];
  } else {
    // x 좌표가 같다면 -> y 좌표로 오름차순 정렬
    return a[1] - b[1];
  }

  // return a[0] - b[0] || a[1] - b[1] // if-else 문 대신 사용 가능
});

// 출력: 정렬된 좌표를 하나씩 꺼내서 출력
// join('\n')으로 줄바꿈 처리
const result = points.map((point) => `${point[0]} ${point[1]}`).join("\n"); // a[0], a[1] 2차원 배열에서 각각 x, y좌표 접근

console.log(result);
