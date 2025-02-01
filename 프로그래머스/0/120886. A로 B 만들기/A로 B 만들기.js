function solution(before, after) {
    let answer = 1;
    
    for(let str of after){
        if(before.includes(str)){
            let arr = [...before];
            arr.splice(before.indexOf(str), 1);
            before = arr.join("");
        } else {
            answer = 0;
        }
    };
    
    return answer;
}