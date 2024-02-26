function solution(s, skip, index) {
    let answer = '';
    let word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < skip.length; i++) {
        word.splice(word.indexOf(skip[i]), 1);
    }
    for (let i = 0; i < s.length; i++) {
        const check = word.indexOf(s[i]);
        if(check + index > word.length - 1) {
            let check2 = check + index - word.length;
            while(check2 > word.length - 1) {
                check2 = check2 - word.length;
            }
            answer += word[check2];
        } else {
            answer += word[check + index];
        }
        
    }
    return answer;
}