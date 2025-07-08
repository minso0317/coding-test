function solution(user_id, banned_id) {
	const result = new Set(); // 중복 없이 저장
  
  function isMatchedID(user, banned) {
	  if (user.length !== banned.length) {
		  return false; // 길이 다르면 아예 다른 단어
	  }
  
	  for (let i = 0; i < user.length; i++) {
		  if (banned[i] === '*') {
			  continue;
		  }
		  if (user[i] !== banned[i]) {
			  return false; // 인덱스가 다르면 다른 단어
		  }
	  }  
	  return true;  
	}

	function dfs(depth, path, used) { 
		// 하나씩 banned ID에 맞는 사람을 찾고, 모든 경우를 확인
		// depth	현재 몇 번째 banned_id를 처리 중인지 (깊이)
		// path	지금까지 매칭한 유저 ID 목록
		// used	어떤 유저 ID를 이미 사용했는지 표시 (중복 방지용)
		if (depth === banned_id.length) { // 모든 banned ID 골랐다면, 조합을 저장
			const sorted = [...path].sort().join(',');
			result.add(sorted); // 	순서만 다른 건 같은 조합이니까 정렬해서 중복 없이 저장
			return;
		}
		
		// 재귀 시작
		for (let i = 0; i < user_id.length; i++) { // 모든 유저와 banned_id[depth]가 맞는지 확인
			if(used[i]) { // 같은 유저가 두 번 걸리면 안 되니까 이미 쓴 사람은 건너뜀
				continue;
			}
			if (isMatchedID(user_id[i], banned_id[depth])) { // 조건이 맞는 유저라면, 그 유저를 이번 banned_id에 연결해보겠다는 뜻
				used[i] = true; // 이 유저를 선택했다고 표시
				path.push(user_id[i]); // path에 추가
				dfs(depth + 1, path, used); // 다음 banned_id로 넘어가기 위해 depth + 1로 재귀 호출
				path.pop(); // 되돌아가기 (백트래킹) - 이 조합은 이제 끝났으니까, 다시 돌아와서 다른 유저를 써볼 준비하기 위해
				used[i] = false; // 초기화해서 다시 쓸 수 있게 해줌
			}
		}
	}
	
	dfs(0, [], Array(user_id.length).fill(false));
	return result.size; // 가능한 조합이 몇 개인지 반환
}