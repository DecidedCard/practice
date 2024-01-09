function solution(arr) {
  let answer = [];

  let minNum = Math.min(...arr);
  arr.splice(arr.indexOf(minNum), 1);
  answer = arr;
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer;
}