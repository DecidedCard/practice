function solution(s) {
  var answer = true;
  if (s.length != 4 && s.length != 6) {
    return false;
  }

  let check = s.split("").find((e) => Number.isInteger(+e) == false);
  if (typeof check == "string") {
    return false;
  }
  return answer;
}
