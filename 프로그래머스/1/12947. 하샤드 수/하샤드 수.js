function solution(x) {
  var answer = true;

  let str = x.toString();
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num += +str[i];
  }
  if ( x % num === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}