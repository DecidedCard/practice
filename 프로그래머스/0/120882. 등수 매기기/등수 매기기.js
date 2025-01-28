function solution(score) {
    let answer = [];
    let ranking = 1;
    
    for(let i = 0; i < score.length; i++){
        const scoreA = score[i][0] + score[i][1];
        for(let j = 0; j < score.length; j++){
            const scoreB = score[j][0] + score[j][1];
            
            if(scoreA < scoreB){
                ranking++;
            }
        }
        answer.push(ranking);
        ranking = 1;
    }
    
    return answer;
}