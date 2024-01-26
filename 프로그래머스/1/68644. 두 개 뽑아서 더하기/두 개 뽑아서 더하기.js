function solution(numbers) {
    var answer = [];
    const check = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) {
                continue;
            }
            const sum = numbers[i] + numbers[j];
            if (check.some((e) => e === sum)){
                continue;
            }
            check.push(sum);
        }
    }
    answer.push(...(check.sort((a, b) => a - b)));
    return answer;
}