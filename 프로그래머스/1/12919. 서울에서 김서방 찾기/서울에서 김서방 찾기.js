function solution(seoul) {
  var answer = '';

  for (let i = 0; i < seoul.length; i++) {
    if ('Kim' === seoul[i]) {
      answer = `김서방은 ${i}에 있다`;
      break;
    }
  }
  return answer;
}