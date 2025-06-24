function solution(n) {
    const remainder = 1234567;
    
    let previous = 0;
    let current = 1;
    
    for(let i = 2; i <= n; i++) {
    const next = (previous + current) % remainder
    previous = current;
    current = next;
    }
    
    return current;
}