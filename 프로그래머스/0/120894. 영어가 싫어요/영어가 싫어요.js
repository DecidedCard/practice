const number = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9,
};

function solution(numbers) {
    let answer = "";
    let str = "";
    
    for(let i of numbers){
        str += i;
        if(number[str] >= 0){
            answer += number[str];
            str = "";
        }
    };
    
    return Number(answer);
}