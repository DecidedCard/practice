function solution(my_str, n) {
    let answer = [];
    
    for(let i = 0; i < my_str.length; i += n){
        const str = my_str.substring(i, i + n);
        answer.push(str);
    };
    
    return answer;
}