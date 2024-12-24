function solution(picture, k) {
    let answer = [];
    let changeStr = "";
    
    for(let i of picture){
        for (let j = 0; j < i.length; j++){
            for(let e = 0; e < k; e++){
                changeStr += i[j];
            };
        };
        
        for(let e = 0; e < k; e++){
            answer.push(changeStr);
        };
        
        changeStr = "";
    };
    
    return answer;
}