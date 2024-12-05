function solution(n) {
    var answer = [n];
    
    while(n !== 1){
        if(n % 2){
            const num = 3 * n + 1;
            answer.push(num);
            n = num;
        } else {
            const num = n / 2;
            answer.push(num);
            n = num;
        }
    }
    
    return answer;
}