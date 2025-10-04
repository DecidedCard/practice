function solution(s){
    let answer = true;
    let checkNum = 0;
    
    for(let char of s.split("")){        
        if(char === "("){
            checkNum += 1
        } else {
            checkNum -= 1
        }
        
        if(checkNum === -1){
            answer = false;
            break;
        }
    }
    
    if(checkNum >= 1){
        answer = false;
    }
    
    return answer;
}