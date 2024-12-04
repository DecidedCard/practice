function solution(n, control) {
    let answer = n;
    const check = {
        w:(n) => n + 1,
        s:(n) => n - 1,
        d:(n) => n + 10,
        a:(n) => n - 10
    }

    for (let str of [...control]){
        const cul = check[str];
        
        answer = cul(answer);
    }

    return answer;
}