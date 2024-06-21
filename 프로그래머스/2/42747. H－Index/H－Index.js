function solution(citations) {
    let answer = 0;
    
    citations = citations.sort((a,b) => b-a);
    
    let arr = [];
    
    for(let i = 0; i < citations.length; i++){
        arr.push(citations[i]);
        if(arr.length > citations[i]){
            break;
        }
        answer++;
    }
   
    return answer;
}