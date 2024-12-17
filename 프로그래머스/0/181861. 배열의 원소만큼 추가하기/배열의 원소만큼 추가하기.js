function solution(arr) {
    let answer = [];
    
    for(let num of arr){
        const arr = Array(num).fill(num);
        answer.push(...arr);    
    };
    
    return answer;
}