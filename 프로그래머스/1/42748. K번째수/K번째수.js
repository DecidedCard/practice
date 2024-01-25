function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) {
        const backupArray = [...array];
        const check = backupArray.slice(commands[i][0]-1, commands[i][1]);
        check.sort((a, b) => a - b);
        answer.push(check[(commands[i][2])-1])
    }
    return answer;
}