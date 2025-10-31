function solution(priorities, location) {
    let answer = 0;
    
    while (priorities.length !== 0) {
        let temp = priorities[0];
        if(Math.max(...priorities) !== temp) {
            priorities.splice(0, 1);
            priorities.push(temp);
            if(--location < 0) location += priorities.length;
        } else {
            answer++
            priorities.splice(0, 1);
            if(location === 0) break;
            location--
        }
    }
    
    return answer;
}