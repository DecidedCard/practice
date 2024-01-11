function solution(s) {
  var answer = "";
  let str = [];
  for (let i = 0; i < s.length; i++) {
    str.push(s[i]);
  }
  answer = str.sort((a, b) => (a > b ? -1 : 1)).join("");
  return answer;
}
