function solution(n) {
  var answer = 0;
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    answer += +num[i];
  }
  return answer;
}
