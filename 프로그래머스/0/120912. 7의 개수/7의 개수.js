function solution(array) {
    let answer = 0;
    
    for(let i of array){
        const j = `${i}`.match(/7/g);
        
        if(j){
            answer += j.length;
        }
    };
    
    return answer;
}