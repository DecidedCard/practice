function solution(lottos, win_nums) {
    var answer = [];
    let check = 0;
    let zeroCount = 0;
    for (let i = 0; i < lottos.length; i++) {
        if(win_nums.find((item) => item === lottos[i])) {
            check += 1;
        }
    }
    lottos.forEach((item) => {
        if(item === 0) {
            zeroCount += 1;
        }
    })
    const highlankingCheck = (check + zeroCount);
    if(highlankingCheck === 0) {
        answer.push(6 - highlankingCheck); 
    } else {
        answer.push(7 - highlankingCheck);   
    }
    if(check === 0) {
        answer.push(6 - check); 
    } else {
        answer.push(7 - check);   
    }
    return answer;
}