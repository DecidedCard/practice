function solution(i, j, k) {
    let answer = 0;
    
    for(let a = i; a <= j; a++){
        if(`${a}`.includes(`${k}`)){
            answer += `${a}`.split("").filter(i => i === `${k}`).length;
        }
    };
    
    return answer;
}