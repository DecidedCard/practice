function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        const check = s[i].charCodeAt();
        const upStr = s.toUpperCase();
        if(check === 32) {
            answer += ' ';
        } else {
            if (s[i] === upStr[i] && check + n > 90) {
                answer += String.fromCharCode(check + n - 90 + 64);
            }else if (check + n > 122){
                answer += String.fromCharCode(check + n - 122 + 96);
            } else {
                answer += String.fromCharCode(check + n);
            }
        }
    }
    return answer;
}