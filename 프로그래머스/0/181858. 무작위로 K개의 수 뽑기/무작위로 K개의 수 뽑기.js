function solution(arr, k) {
    let answer = [];
    
    for(let num of arr){
        if(answer.includes(num)) continue;
        if(answer.length === k) break;
        answer.push(num);
    };
    
    const arr2 = Array(k - answer.length).fill(-1);
    answer.push(...arr2);
    
    return answer;
}