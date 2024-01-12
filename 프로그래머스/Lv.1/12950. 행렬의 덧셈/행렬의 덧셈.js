function solution(arr1, arr2) {
  let answer = new Object();
  for (let i = 0; i < arr1.length; i++) {
    answer[i.toString()] = {};
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i.toString()][j.toString()] = {};
      answer[i.toString()][j.toString()] =
        arr1[i.toString()][j.toString()] + arr2[i.toString()][j.toString()];
    }
  }
  return Object.values(answer).map((e) => Object.values(e));
}
