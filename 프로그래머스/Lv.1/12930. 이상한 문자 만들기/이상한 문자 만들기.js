function solution(s) {
    var answer = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count = 0;
            answer += ' ';
        } else {
             if (count % 2 === 0) {
            answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            count++
        }
    }
    console.log(answer);
    return answer;
}

solution("	  TrY  hElLo  WoRlD ")