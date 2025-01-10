function solution(numbers, direction) {
    if(direction === "right"){
        const last = numbers.splice(numbers.length - 1, 1);
        numbers.unshift(...last);
    }
    
    if(direction === "left"){
        const start = numbers.splice(0, 1);
        numbers.push(...start);
    }
    
    return numbers;
}