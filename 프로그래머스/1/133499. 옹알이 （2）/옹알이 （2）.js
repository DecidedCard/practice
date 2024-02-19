function solution(babbling) {
    var answer = 0;
    const possibleWord = ["aya", "ye", "woo", "ma"]
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < possibleWord.length; j++) {
            if(babbling[i].includes(possibleWord[j].repeat(2))) {
                break;
            }
            babbling[i] = babbling[i].split(possibleWord[j]).join("!");
        }
    }
    answer = babbling.filter((e) => {
        return /^!+$/.test(e)}).length;
    
    return answer;
}