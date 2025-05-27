/**
 * 문제 원리
 *
 * 문자를 앞에서부터 하나씩 확인하고,
 * 이미 나온 문자이면 바로 전 글자와 확인 후,
 * 다르면 그룹 단어가 아니다.
 */

/**
 * 문제 흐름
 *
 * 단어를 순서대로 탐색
 * 문자를 하나씩 찾아보면서
 *  - 처음 등장한 문자면 기록
 *  - 이미 등장한 문자인데 바로 앞 문자와 다르면 그룹단어x 기록x
 * 위 조건을 만족하는 그룹 단어만 개수 세기
 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]); // 첫 줄은 단어 개수이므로 숫자로 변환
const words = input.slice(1); // 두 번째 줄부터는 단어들이므로 배열로 복사

let count = 0; // 그룹 단어 개수를 세기 위한 변수 초기화

// 단어 하나씩 검사
for (let i = 0; i < N; i++) {
  const word = words[i]; // 현재 단어, 단어 하나 꺼냄
  const seen = new Set(); // 이미 등장한 문자 저장(중복 허용 X)
  // Set() 자료구조: 중복을 허용하지 않는 집합. 문자의 중복 여부를 체크할 때 사용

  let isGroupWord = true; // 기본적으로 그룹 단어라고 가정

  for (let j = 0; j < word.length; j++) {
    const currentWord = word[j]; // 현재 문자
    const previousWord = word[j - 1]; // 이전 문자

    if (seen.has(currentWord) && currentWord !== previousWord) {
      // 이미 등장한 문자이고, 바로 앞의 문자와 다르면 그룹단어x
      isGroupWord = false;
      break;
    }

    seen.add(currentWord); // 현재 글자를 기록
  }

  if (isGroupWord) {
    count += 1; // 그룹 단어일 때 카운트 증가
  }
}

console.log(count); // 최종 그룹 단어 개수 출력

// // Set을 사용하지 않고 a ~ z를 인덱스로 맵핑해서 확인하는 방법
// const fs = require("fs");
// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// const N = Number(input[0]);
// const words = input.slice(1);

// let count = 0; // 그룹 단어 개수

// for (let i = 0; i < N; i++) {
//   const word = words[i];
//   const visited = Array(26).fill(false); // 알파벳 등장 여부 저장 (a~z)
//   let isGroupWord = true;

//   for (let j = 0; j < word.length; j++) {
//     const currentChar = word[j];
//     const prevChar = word[j - 1];

//     const index = currentChar.charCodeAt(0) - 97;
//     // 알파벳 'a'는 ASCII 97 → a=0, b=1, ..., z=25

//     if (currentChar !== prevChar) {
//       if (visited[index]) {
//         // 이전에 나왔던 문자가 다시 나오면 → 그룹 단어 아님
//         isGroupWord = false;
//         break;
//       }
//       visited[index] = true; // 처음 나온 문자로 체크
//     }
//   }

//   if (isGroupWord) {
//     count += 1;
//   }
// }

// console.log(count);
