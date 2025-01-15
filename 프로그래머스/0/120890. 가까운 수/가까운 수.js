function solution(array, n) {
    let sum = 100;
    let answer = 0;
    
    array.sort((a,b) => a - b);
    
    for(let num of array){
        if(Math.abs(num - n) < sum){
            sum = Math.abs(num - n);
            answer = num;
        };
    };    
    return answer;
}