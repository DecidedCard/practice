function solution(num_list) {
    let answer = [0, 0];
    
    for(let num of num_list){
        if(num % 2){
            answer[1] = answer[1] + 1;
        } else {
            answer[0] = answer[0] + 1;
        };
    };
    
    return answer;
}