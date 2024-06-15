function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    tangerine.forEach((i) => obj[i] = (obj[i] || 0) + 1)
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    for(const i of arr){
        answer++
        if(k > i)k -= i
        else break;
        
    }
    
    return answer;
}