function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length-(p.length-1); i++) {
        let checkNum = "";
        for (let j = 0; j < p.length; j++) {
            checkNum += t[i+j];
        }
        if (checkNum <= p) {
            answer++;
        }
    }
    return answer;
}