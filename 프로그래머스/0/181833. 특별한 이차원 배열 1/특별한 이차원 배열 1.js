function solution(n) {
    let answer = [];
    
    for(let i = 0; i < n; i++){
        let arr = [];
        for(let j = 0; j < n; j++){
            if(j === i) {
                arr.push(1);
                continue;
            };
            arr.push(0);
        };
        answer.push(arr);
        arr = [];
    };
    
    return answer;
}