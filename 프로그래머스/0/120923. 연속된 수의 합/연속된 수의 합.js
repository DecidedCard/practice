function solution(num, total) {
    let answer = [];
    let a = Math.floor(total / num);
    let b = (total / num) % 1 === 0 ? a - Math.floor(num / 2) : a - (Math.floor(num / 2) - 1);
    
    
    for(let i = b; i < b + num; i++){
        answer.push(i);
    };
    
    return answer;
}