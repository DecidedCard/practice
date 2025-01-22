function solution(spell, dic) {
    let answer = 2;
    
    for(let i of dic){
        let check = [];
        
        for(let j of spell){
            check.push(i.includes(j))
        };
        
        if(!check.includes(false)){
            answer = 1;
        }
    };
    
    return answer;
}