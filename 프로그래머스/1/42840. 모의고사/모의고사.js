function solution(answers) {
    let answer = [];
    const check = [];
    
    let iCheck = 0;
    let jCheck = 0;
    let kCheck = 0;
    
    const firstCheck = [1, 2, 3, 4, 5];
    const secondCheck = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdCheck = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let a = 0; a < answers.length; a++) {
        if(answers[a] === firstCheck[a % firstCheck.length]){
            iCheck += 1;
        }
        if(answers[a] === secondCheck[a % secondCheck.length]){
            jCheck += 1;
        }
        if(answers[a] === thirdCheck[a % thirdCheck.length]){
            kCheck += 1;
        }
    }
    check.push(iCheck, jCheck, kCheck);
    const bestScore = Math.max(...check)
    
    check.map((e, idx) => {
        if(bestScore === e) {
            answer.push(idx+1);
        }
    })    
    return answer;
}