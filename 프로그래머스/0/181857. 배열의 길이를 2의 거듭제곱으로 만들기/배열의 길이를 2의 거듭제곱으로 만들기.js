function solution(arr) {
    let answer = [...arr];
    let sum = 0;
    let num = 0;
    
    while(sum < answer.length){
        const a = 2 ** num;
        sum = a;
        num += 1;
    };
    
    if(answer.length === sum) return answer;
    
    answer.push(...Array(sum - answer.length).fill(0));
    
    return answer;
}