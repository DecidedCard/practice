function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++) {
        const check = Math.floor(food[i]/2);
        for(let j = 0; j < check; j++) {
            answer += i;
        }
    }
    answer += 0;
    for (let k = answer.length-2; k >= 0; k--) {
        answer += answer[k];
    }
    return answer;
}