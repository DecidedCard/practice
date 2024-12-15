function solution(strArr) {
    let answer = [...strArr];
    
    for(let str of strArr){        
        if(str.includes('ad')){
            const index = answer.indexOf(str);
            answer.splice(index, 1);
        };
    };
    
    return answer;
}