function solution(numbers) {
    const sortArr = numbers.sort((a, b) => a - b);
    
    const a = sortArr[0] * sortArr[1];
    const b = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2];

    return a > b ? a : b;
}