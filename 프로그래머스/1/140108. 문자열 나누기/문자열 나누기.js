function solution(s) {
    let answer = 0;
    let checkWord = s[0];
    let checkNum = 0;
    for (let i = 0; i < s.length; i++) {
        if(checkWord === s[i]) {
            checkNum += 1;
        } else {
            checkNum -= 1;
        }
        if(!checkNum) {
            checkWord = s[i+1];
            answer += 1;
        } else if(i >= s.length-1) {
            answer += 1;
        }
    }
    return answer;
}