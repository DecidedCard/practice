function solution(chicken) {
    let answer = 0;
    let rest = 0;
    
    while(chicken > 1){
        answer += Math.floor(chicken / 10);
        rest += chicken % 10;
        chicken /= 10;
    };    
    
    if(rest > 10){
        answer += Math.floor(rest / 10);
    };
    
    return answer;
}