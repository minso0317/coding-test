function solution(s) {
  const stack = [];

  for (const value of s) {
    if (value === "(") {
      stack.push(value);
    } else if (value === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

