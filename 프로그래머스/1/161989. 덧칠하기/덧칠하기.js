function solution(n, m, section) {
    let answer = 0;
    let wallArr = new Array(n).fill(true);
    section.forEach((e) => {
        wallArr[e-1] = false
    })
    section.forEach((e)=> {
        if(wallArr[e-1] === false) {
            for(let i = 0; i < m; i++) {
                wallArr[e-1+i] = true;
            }
            answer += 1;
        }
    })
    return answer;
}