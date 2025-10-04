function solution(arr)
{
    let answer = [];
    
    for(let i of arr){
        if(answer[answer.length-1] === i){
            continue;
        }
        answer.push(i);
    }
    
    return answer;
}