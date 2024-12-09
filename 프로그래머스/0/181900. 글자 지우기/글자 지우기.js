function solution(my_string, indices) {
    let answer = [...my_string];
    
    indices.map((item) => {
        answer[item] = "";   
    })
        
    return answer.join("");
}