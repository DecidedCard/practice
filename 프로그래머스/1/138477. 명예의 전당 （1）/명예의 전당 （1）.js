function solution(k, score) {
    var answer = [];
    const checkK = [];
    for (let i = 0; i < score.length; i++) {
        if (checkK.length !== k) {
            checkK.push(score[i])
            checkK.sort((a, b) => b - a);
            answer.push(checkK[i]);
        } else {
            if(checkK.some((item) => item < score[i])) {
                checkK.pop();
                checkK.push(score[i])
                checkK.sort((a, b) => b - a);
                answer.push(checkK[k-1]);
            } else {
                answer.push(checkK[k-1]); 
            }
        }
    }
    return answer;
}