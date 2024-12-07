function solution(intStrs, k, s, l) {
    let answer = [];
    
    for (let int of intStrs){
        const num = int.substring(s, s + l);
        
        if(num > k){
            answer.push(Number(num));
        }
    };
    
    return answer;
}