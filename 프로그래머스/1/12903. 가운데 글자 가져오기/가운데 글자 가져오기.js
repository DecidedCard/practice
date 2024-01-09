function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    const startIndex = s.length / 2 - 1;
    const endIndex = s.length / 2 - 1 + 2;
    answer = s.slice(startIndex, endIndex);
  } else {
    const foundIndex = s.length / 2;
    answer = s.split("")[foundIndex - 0.5];
  }
  return answer;
}
