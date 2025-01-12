function solution(n) {
    let answer = [];
    let number = 2;
    
    while(n >= 2){
        if(n % number === 0){
            answer.push(number);
            n = n / number;
        } else {
            number++;
        }
    };
    
    return [...new Set(answer)];
}