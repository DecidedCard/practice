function solution(myString, pat) {
    let answer = 0;
    
    for(let i = 0; i < myString.length;){
        const index = myString.indexOf(pat, i);
        
        if(index === -1){
            return answer;
        };
        
        i = index + 1;
        answer += 1;
    }    
    
    return answer;
}