function solution(n) {
  var answer = [];
  let str = n.toString();
  const mapfn = (arg) => Number(arg);
  let num = Array.from(str, mapfn);
  for (let i= 0; i < num.length; i++) {
    answer.unshift(num[i]);
  }
  return answer;
}