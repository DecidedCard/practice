function solution(prices) {
    let answer = [];
    let second = 0;
    let length = prices.length;
    
    for(let i = 0; i < length; i++){
        if(i === length - 1){
            answer.push(0);
            break;
        }
        
        for(let j = i + 1; j < length; j++){
            if(prices[i] <= prices[j]) {
                second++;
            } else {
                answer.push(second + 1);
                second = 0;
                break;
            }
            
            if(j === length - 1){
                answer.push(second);
                second = 0;
            }
        }
    }
    
    return answer;
}