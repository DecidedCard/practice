function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a-b);    
    while(score.length >= m) {
        const box = [];
        for(let i = 0; i < m; i++) {
            const check = score.pop();
            box.push(check);
        }
        answer += box[box.length-1] * box.length;
    }
    return answer;
}