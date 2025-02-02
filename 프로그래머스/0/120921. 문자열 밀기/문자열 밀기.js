function solution(A, B) {
    let answer = 0;
    
    if(A === B){
        return answer
    }
    
    for(let i = 1; i < A.length; i++){
        const change = A.slice(-i) + A.slice(0, A.length - i);
        answer++
        
        if(change === B){
            return answer;
        }
    };
    
    return -1;
}