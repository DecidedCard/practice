function solution(my_string, queries) {
    let answer = [...my_string];
    
    for (let [s, e] of queries){
        const a = answer.slice(s, e + 1).reverse();
                
        answer.splice(s, e - s + 1, ...a);        
    }
    
    return answer.join("");
}