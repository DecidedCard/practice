function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    const checkNum = Number.isInteger(Math.sqrt(i));
    answer += (checkNum ? -1 : 1) * i;
  }
  return answer;
}
