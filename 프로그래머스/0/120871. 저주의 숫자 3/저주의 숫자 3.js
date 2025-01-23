function solution(n) {
    let answer = 0;
    
    for(let i = 0; i < n; i++){
        answer++;
        while(!(answer % 3) || `${answer}`.indexOf("3") !== -1){
            answer++;
        };
    };
    
    return answer;
}