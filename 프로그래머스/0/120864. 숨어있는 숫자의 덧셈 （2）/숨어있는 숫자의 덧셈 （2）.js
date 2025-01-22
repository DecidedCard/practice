function solution(my_string) {
    let answer = 0;
    const arr = my_string.match(/\d+/g);
        
    if(arr){
        for(let i of arr){
            answer += Number(i);
        };
    }

        
    return answer;
}