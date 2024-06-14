function solution(n) {
    const checkArr = [0, 1, 2];

    for (let i = 3; i <= n; i++){
        checkArr.push((checkArr[i-1] + checkArr[i-2]) % 1234567);
    }
    
    return checkArr[n];
}