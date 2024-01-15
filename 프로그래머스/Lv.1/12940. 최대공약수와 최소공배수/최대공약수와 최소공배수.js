function solution(n, m) {
    var answer = [];
    let num;
    for (let i = 0; i < Math.max(n, m); i++) {
        if (Math.max(n, m) % i === 0 && Math.min(n, m) % i === 0) {
            num = i;
        }
    }
    answer = [num, n * m / num];
    return answer;
}