const fs = require("fs");

// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 백준 제출경로
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
// 로컬에서 사용
// 읽어오는 데이터는 기본적으로 바이너리, .toString()으로 문자열로 변환
// \n로 인한 에러 방지를 위해 .trim()으로 공백 문자, 줄바꿈 문자 제거
// .split('\n')을 사용해 줄바꿈 기준으로 문자열을 나눠서 배열로 만듬
// console.log(input); // [ '5', '20 10 35 30 7' ]

const N = Number(input[0]);
// input[0]은 첫 번째 줄에 입력된 문자열 '5'이고, Number()로 문자열 '5'을 숫자 5로 변환해 N에 저장함

const number = input[1].split(" ").map(Number);
// input[1]은 숫자들이 공백으로 연결된 문자열이고, split(' ')으로 나누어 문자열 배열로 만들듬
// map(Number)로 각 문자열을 숫자로 바꿔서 최종적으로 숫자 배열로 저장함

const min = Math.min(...number);
// Math.min() 여러 개의 숫자 중에서 최솟값을 반환함
// number는 배열이라 ...을 사용해 개별 숫자로 펼쳐야 함
// ...number는 배열을 개별 인수로 펼치는 스프레드 문법

const max = Math.max(...number);
// Math.max() 여러 개의 숫자 중에서 최댓값을 반환함

console.log(`${min} ${max}`);
