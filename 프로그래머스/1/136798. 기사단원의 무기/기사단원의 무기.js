function solution(number, limit, power) {
    let answer = 0;
    let checkArr = [];
    for(let i = 1; i <= number; i++) {
        checkArr.push(divisor(i));
    }
    
    checkArr.forEach((e, i) => {
        if(e > limit){
            checkArr[i] = power;
            answer += checkArr[i];
        } else {
            answer += e;
        }
    })
    return answer;
}

function divisor (num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if(i === Math.sqrt(num)) {
            count += 1;
        } else if (num % i === 0){
            count += 2;
        }
    }
    return count;
}