function solution(s) {
    const answer = [];
    const arrayStr = [];
    for (let i = 0; i < s.length; i++) {
        const checkArray = arrayStr.indexOf(s[i]);
        if(checkArray === -1) {
            answer.push(-1);
            arrayStr.push(s[i]);
            continue;
        }
        const minusArray = arrayStr.lastIndexOf(s[i]);
        arrayStr.push(s[i]);
        answer.push(arrayStr.length-1 - minusArray);
    }
    return answer;
}