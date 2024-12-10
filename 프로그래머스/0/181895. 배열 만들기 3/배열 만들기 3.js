function solution(arr, intervals) {
    let answer = [];
    
    for (let interval of intervals){
        const [a, b] = interval;
        answer.push(...arr.slice(a, b + 1));
    };
    
    return answer;
}