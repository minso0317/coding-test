function solution(n,a,b) {
    let round = 0;
	    
	   for(let i = 1; i <= n; i++) {
	    if(a === b) {
		    break;
	    } else {
		    a = (a % 2 === 0) ? a / 2 : (a + 1) / 2;
		    b = (b % 2 === 0) ? b / 2 : (b + 1) / 2;
	      round++;
	    }
    }

    return round;
}