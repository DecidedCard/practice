function solution(arr1, arr2) {
    const xLen = arr1.length;
    const yLen = arr2[0].length;
    let answer = new Array(xLen);
    
    for (let i = 0; i < xLen; i++){
        let arr = new Array(yLen);
        for (let j = 0; j < yLen; j++){
            let sum = 0;
            for (let k = 0; k < arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            arr[j] = sum;
        }
        answer[i] = arr;
    }
    return answer;
}