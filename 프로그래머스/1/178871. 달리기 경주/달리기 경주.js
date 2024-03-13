function solution(players, callings) {
    let answer = [];
    let obj = {};
    
    players.forEach((item, idx) => {
        obj[item] = (obj[item] | 0) + idx;
    })    
    callings.forEach((item) => {
        const check = obj[item];
        
        let temp = players[check-1];
        players[check-1] = players[check];
        players[check] = temp
       
        obj[players[check-1]] = check-1;
        obj[players[check]] = check;
    })
    answer = players
    return answer;
}