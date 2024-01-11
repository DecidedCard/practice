function solution(price, money, count) {
  let answer = 0;
  let checkMoney = 0;
  for (let i = 1; i <= count; i++) {
    checkMoney += price * i;
  }
  answer += money - checkMoney;
  return answer < 0 ? -answer : (answer = 0);
}
