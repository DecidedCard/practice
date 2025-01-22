function solution(sides) {
    let answer = [];
    sides.sort((a, b) => a - b);
    
    for(let i = sides[1]; i + sides[0] > sides[1]; i--){
        answer.push(i);
    };
    
    for(let i = sides[0] + sides[1] - 1; i > sides[1]; i--){
        answer.push(i);
    }
    
    return answer.length;
}