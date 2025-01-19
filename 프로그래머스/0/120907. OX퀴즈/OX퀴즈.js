function solution(quiz) {
    let answer = [];
    
    for(let i of quiz){
        const arr = i.split(" ");
        
        if(arr[1] === "+"){
            const cul = Number(arr[0]) + Number(arr[2]);
            if(cul === Number(arr[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
        
          if(arr[1] === "-"){
            const cul = Number(arr[0]) - Number(arr[2]);
            if(cul === Number(arr[4])){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    };
    
    return answer;
}