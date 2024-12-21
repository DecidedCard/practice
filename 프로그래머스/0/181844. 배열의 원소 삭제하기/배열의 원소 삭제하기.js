function solution(arr, delete_list) {
    let answer = [...arr];
    
    for(let num of delete_list){
        if(answer.indexOf(num) !== -1){
            answer.splice(answer.indexOf(num), 1);  
        };
    };
    
    return answer;
}