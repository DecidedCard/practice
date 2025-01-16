function solution(n) {
    let answer = [1];
    
    for(let i = 0; i < n; i++){
        if(n % i === 0){
            answer.push(n / i);
        }
    };
    
    return answer.sort((a, b) => a - b);
}